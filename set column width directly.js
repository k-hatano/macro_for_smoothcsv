// 列幅を直接入力する

const sheet = App.getActiveSheet();
const activeRange = sheet.getActiveRange();

const firstColumn = activeRange.getColumn();
const lastColumn = activeRange.getLastColumn();

const inputValue = Window.prompt("Input column width:", sheet.getColumnWidth(firstColumn));
const columnWidth = parseFloat(inputValue);
if (inputValue == null) {
  exit;
}
if (isNaN(columnWidth)) {
  Window.alert("Input value is not an integer.");
  exit;
}
if (columnWidth < 0) {
  Window.alert("Column width needs to be a positive number.");
  exit;  
}

const columns = sheet.getNumColumns();
for (let i = firstColumn; i <= lastColumn; i++) {
  sheet.setColumnWidth(i, columnWidth);
}

