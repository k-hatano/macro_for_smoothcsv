// 選択セルの内容を次のシートの同じ位置にコピー

const sheet = App.getActiveSheet();
let sheets = App.getSheets();

if (sheets.length == 1 || sheet.getIndex() == sheets.length) {
  Window.alert("Next sheet is not found.");
  exit;
}
const nextSheet = sheets[sheet.getIndex()];

const activeRange = sheet.getActiveRange();
activeRange.forEach(function(cell, value, row, column){
  nextSheet.getRange(row, column).setValue(value);
});

nextSheet.activate();
nextSheet.getRange(activeRange.row, activeRange.column, activeRange.getNumColumns(), activeRange.getNumRows()).activate();

