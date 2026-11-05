const generator = javascript.javascriptGenerator;

// ==========================================
// 1. ブロック定義
// ==========================================

Blockly.Blocks['lean_by_contrapositive'] = {
  init: function() {
    this.appendDummyInput().appendField("対偶法を用いる ");
    this.appendDummyInput()
        .appendField("  仮定 (結論の否定 ):")
        .appendField(new Blockly.FieldTextInput("h_neg_Q"), "HYP_NAME")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("Odd n"), "HYP_CLAIM");
    this.appendStatementInput("DO").appendField("  仮定の否定 (¬P) を導くステップ:");
    this.appendDummyInput()
        .appendField("   示すべき目標 (仮定の否定 ):")
        .appendField(new Blockly.FieldTextInput("Odd (n^2)"), "GOAL_CLAIM");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
  }
};

Blockly.Blocks['lean_theorem_contrapositive_ex'] = {
  init: function() {
    this.appendDummyInput().appendField("定理 : n² が偶数なら n も偶数である");
    this.appendStatementInput("DO").appendField("証明手順:");
    this.setColour(160);
  }
};

Blockly.Blocks['lean_by_contradiction'] = {
  init: function() {
    this.appendDummyInput().appendField("背理法を用いる");
    this.appendDummyInput()
        .appendField("  仮定 :")
        .appendField(new Blockly.FieldTextInput("h_rat"), "HYP_NAME")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("√2 ∈ ℚ"), "HYP_CLAIM");
    this.appendStatementInput("DO").appendField("  矛盾を導く計算・推論:");
    this.appendDummyInput()
        .appendField("   矛盾の根拠:")
        .appendField(new Blockly.FieldTextInput("h1"), "HYP_1")
        .appendField("と")
        .appendField(new Blockly.FieldTextInput("h2"), "HYP_2")
        .appendField("が矛盾");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
  }
};

Blockly.Blocks['lean_contradiction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("仮定")
        .appendField(new Blockly.FieldTextInput("h1"), "H1")
        .appendField("と")
        .appendField(new Blockly.FieldTextInput("h2"), "H2")
        .appendField("より矛盾を示す");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
  }
};

Blockly.Blocks['lean_theorem_sqrt2'] = {
  init: function() {
    this.appendDummyInput().appendField("定理: √2 は無理数である");
    this.appendStatementInput("DO").appendField("証明手順:");
    this.setColour(160);
  }
};

Blockly.Blocks['lean_def_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("関数定義")
        .appendField(new Blockly.FieldTextInput("sum_n"), "DEF_NAME");
    this.appendDummyInput()
        .appendField("  | 0 =>")
        .appendField(new Blockly.FieldTextInput("0"), "BASE_VAL");
    this.appendDummyInput()
        .appendField("  | n + 1 =>")
        .appendField(new Blockly.FieldTextInput("(n + 1) + sum_n n"), "STEP_VAL");
    this.setColour(160);
  }
};

Blockly.Blocks['lean_theorem_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("定理")
        .appendField(new Blockly.FieldTextInput("my_theorem"), "THM_NAME")
        .appendField("(変数:")
        .appendField(new Blockly.FieldTextInput("n : ℕ"), "VAR_DECL")
        .appendField(")");
    this.appendDummyInput()
        .appendField("  証明:")
        .appendField(new Blockly.FieldTextInput("Even (n^2) → Even n"), "CLAIM");
    this.appendStatementInput("DO").appendField("証明手順:");
    this.setColour(160);
  }
};

Blockly.Blocks['lean_induction_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("数学的帰納法を用いる (対象:")
        .appendField(new Blockly.FieldTextInput("n"), "VAR_NAME")
        .appendField(", 仮定名:")
        .appendField(new Blockly.FieldTextInput("ih"), "IH_NAME")
        .appendField(")");
    this.appendStatementInput("BASE").appendField("[1] (n = 0):");
    this.appendStatementInput("STEP").appendField("[2] (n = k + 1):");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};

Blockly.Blocks['lean_rcases_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("仮定")
        .appendField(new Blockly.FieldTextInput("h_neg_Q"), "TARGET")
        .appendField("を分解して変数")
        .appendField(new Blockly.FieldTextInput("k"), "VAR")
        .appendField("と等式")
        .appendField(new Blockly.FieldTextInput("hk"), "EQ_NAME")
        .appendField("を得る ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};

Blockly.Blocks['lean_dsimp_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("定義を展開して計算")
        .appendField(new Blockly.FieldTextInput("sum_n"), "TARGET");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};

Blockly.Blocks['lean_unfold_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("関数")
        .appendField(new Blockly.FieldTextInput("f"), "TARGET");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
  }
};

Blockly.Blocks['lean_use_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("証明の変数に具体例")
        .appendField(new Blockly.FieldTextInput("2 * k^2 + 2 * k"), "VAL")
        .appendField("を代入する ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};

Blockly.Blocks['lean_rw_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("等式・仮定")
        .appendField(new Blockly.FieldTextInput("hk"), "TARGET")
        .appendField("で右辺へ書き換える ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};

Blockly.Blocks['lean_rw_back_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("等式・仮定")
        .appendField(new Blockly.FieldTextInput("hk"), "TARGET")
        .appendField("で左辺へ逆書き換える ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};

Blockly.Blocks['lean_have_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("途中式・補題")
        .appendField(new Blockly.FieldTextInput("h1"), "LABEL")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("a = b"), "CLAIM")
        .appendField("を作成");
    this.appendStatementInput("DO").appendField("その根拠:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};

Blockly.Blocks['lean_raw_tactic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lean タクティク直接入力:")
        .appendField(new Blockly.FieldTextInput("ring"), "CODE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};

Blockly.Blocks['lean_exact_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("仮定")
        .appendField(new Blockly.FieldTextInput("h1"), "TARGET")
        .appendField("でゴールを直接解決 ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
  }
};

Blockly.Blocks['lean_auto_calc'] = {
  init: function() {
    this.appendDummyInput().appendField("自然数・整数の自動計算 ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};

Blockly.Blocks['lean_ring'] = {
  init: function() {
    this.appendDummyInput().appendField("多項式の同値整理 ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};

Blockly.Blocks['lean_linarith'] = {
  init: function() {
    this.appendDummyInput().appendField("一次不等式・等式の自動証明 ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
  }
};

// ==========================================
// 2. Lean 4 コード生成ロジック
// ==========================================

generator.forBlock['lean_by_contrapositive'] = function(block, gen) {
  var hypName = block.getFieldValue('HYP_NAME');
  var hypClaim = block.getFieldValue('HYP_CLAIM');
  var innerSteps = gen.statementToCode(block, 'DO') || '    sorry\n';
  var goalClaim = block.getFieldValue('GOAL_CLAIM');

  return '  contrapose!\n' +
         '  intro ' + hypName + '\n' +
         '  -- : ' + hypName + ' : ' + hypClaim + '\n' +
         '  -- : ' + goalClaim + '\n' +
         innerSteps;
};

generator.forBlock['lean_theorem_contrapositive_ex'] = function(block, gen) {
  var branch = gen.statementToCode(block, 'DO') || '    sorry\n';
  return 'theorem even_of_even_sq (n : ℕ) : Even (n^2) → Even n := by\n' + branch + '\n';
};

generator.forBlock['lean_by_contradiction'] = function(block, gen) {
  var hypName = block.getFieldValue('HYP_NAME');
  var hypClaim = block.getFieldValue('HYP_CLAIM');
  var innerSteps = gen.statementToCode(block, 'DO') || '    sorry\n';

  return '  by_contra ' + hypName + '\n' +
         '  -- :' + hypName + ' : ' + hypClaim + '\n' +
         innerSteps;
};

generator.forBlock['lean_contradiction'] = function(block) {
  var h1 = block.getFieldValue('H1');
  var h2 = block.getFieldValue('H2');
  return '    exact ' + h1 + ' ' + h2 + '\n';
};

generator.forBlock['lean_theorem_sqrt2'] = function(block, gen) {
  var branch = gen.statementToCode(block, 'DO') || '    sorry\n';
  return 'theorem sqrt2_irrational : Irrational (Real.sqrt 2) := by\n' + branch + '\n';
};

generator.forBlock['lean_def_custom'] = function(block) {
  var name = block.getFieldValue('DEF_NAME');
  var base = block.getFieldValue('BASE_VAL');
  var step = block.getFieldValue('STEP_VAL');
  return 'def ' + name + ' : ℕ → ℕ\n  | 0 => ' + base + '\n  | n + 1 => ' + step + '\n\n';
};

generator.forBlock['lean_theorem_custom'] = function(block, gen) {
  var name = block.getFieldValue('THM_NAME');
  var decl = block.getFieldValue('VAR_DECL');
  var claim = block.getFieldValue('CLAIM');
  var branch = gen.statementToCode(block, 'DO') || '    sorry\n';
  return 'theorem ' + name + ' (' + decl + ') : ' + claim + ' := by\n' + branch + '\n';
};

generator.forBlock['lean_induction_custom'] = function(block, gen) {
  var varName = block.getFieldValue('VAR_NAME');
  var ihName = block.getFieldValue('IH_NAME');
  var base = gen.statementToCode(block, 'BASE') || '    sorry\n';
  var step = gen.statementToCode(block, 'STEP') || '    sorry\n';
  return '  induction ' + varName + ' with\n  | zero =>\n' + base + '  | succ k ' + ihName + ' =>\n' + step;
};

generator.forBlock['lean_rcases_custom'] = function(block) {
  var target = block.getFieldValue('TARGET');
  var varName = block.getFieldValue('VAR');
  var eqName = block.getFieldValue('EQ_NAME');
  return '    rcases ' + target + ' with ⟨' + varName + ', ' + eqName + '⟩\n';
};

generator.forBlock['lean_dsimp_custom'] = function(block) {
  var target = block.getFieldValue('TARGET');
  return '    dsimp [' + target + ']\n';
};

generator.forBlock['lean_unfold_custom'] = function(block) {
  var target = block.getFieldValue('TARGET');
  return '    unfold ' + target + '\n';
};

generator.forBlock['lean_use_custom'] = function(block) {
  var val = block.getFieldValue('VAL');
  return '    use ' + val + '\n';
};

generator.forBlock['lean_rw_custom'] = function(block) {
  var target = block.getFieldValue('TARGET');
  return '    rw [' + target + ']\n';
};

generator.forBlock['lean_rw_back_custom'] = function(block) {
  var target = block.getFieldValue('TARGET');
  return '    rw [← ' + target + ']\n';
};

generator.forBlock['lean_have_custom'] = function(block, gen) {
  var label = block.getFieldValue('LABEL');
  var claim = block.getFieldValue('CLAIM');
  var branch = gen.statementToCode(block, 'DO') || '    sorry\n';
  return '    have ' + label + ' : ' + claim + ' := by\n' + branch;
};

generator.forBlock['lean_exact_custom'] = function(block) {
  var target = block.getFieldValue('TARGET');
  return '    exact ' + target + '\n';
};

generator.forBlock['lean_raw_tactic'] = function(block) {
  var code = block.getFieldValue('CODE');
  return '    ' + code + '\n';
};

generator.forBlock['lean_auto_calc'] = function() { return '    omega\n'; };
generator.forBlock['lean_ring'] = function() { return '    ring\n'; };
generator.forBlock['lean_linarith'] = function() { return '    linarith\n'; };