const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 一時ファイルの保存先
const TEMP_FILE_PATH = path.join(__dirname, 'temp_proof.lean');

app.post('/api/verify', (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ success: false, output: 'コードが空です。' });
  }

  // 1. 受信した Lean コードを一時ファイルに書き出し
  fs.writeFile(TEMP_FILE_PATH, code, 'utf8', (err) => {
    if (err) {
      console.error('ファイル書き込みエラー:', err);
      return res.status(500).json({ success: false, output: 'サーバー側でファイル作成に失敗しました。' });
    }

    // 2. lean コマンドを実行して検証
    // ※ Lake プロジェクト配下で Mathlib を使用している場合は `lake env lean` を使用
    const command = `lake env lean "${TEMP_FILE_PATH}"`;

    exec(command, { timeout: 30000 }, (error, stdout, stderr) => {
      // 一時ファイルの削除
      fs.unlink(TEMP_FILE_PATH, () => {});

      const output = stdout + (stderr ? '\n' + stderr : '');

      if (error) {
        // エラーや sorry / エラーメッセージが含まれる場合
        return res.json({
          success: false,
          output: output.trim() || error.message
        });
      }

      // エラー出力がなければ成功
      res.json({
        success: true,
        output: '証明の検証に成功しました！\n' + output.trim()
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Lean 4 検証サーバーが http://localhost:${PORT} で起動しました`);
});