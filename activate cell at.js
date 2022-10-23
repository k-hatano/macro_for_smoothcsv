// 入力した位置のセルをアクティブに

const sheet = App.getActiveSheet();

const currentRange = sheet.getActiveRange();
const currentValue = "" + currentRange.getRow() + "," + currentRange.getColumn();
const inputValue = Window.prompt("Which cell to activate?", currentValue);
if (inputValue == null) {
  exit;
}
let row = inputValue.split(',')[0] || 1;
let column = inputValue.split(',')[1] || 1;
sheet.setActiveRange(sheet.getRange(row, column));
