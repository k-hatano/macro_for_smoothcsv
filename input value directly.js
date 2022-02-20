// 値を直接入力する

const sheet = App.getActiveSheet();

const currentValue = sheet.getActiveRange().getValue();
const inputValue = Window.prompt("Input value:", currentValue);
if (inputValue == null) {
  exit;
}
sheet.getActiveRange().forEach(function(cell, value, row, column){
  cell.setValue(inputValue);
});
