// 行と列を入れ替える

const currentSheet = App.getActiveSheet();

App.newSheet(currentSheet.getNumColumns(), currentSheet.getNumRows());
const newSheet = App.getActiveSheet();

currentSheet.getRange().forEach(function(cell, value, row, column){
  newSheet.getRange(column, row).setValue(currentSheet.getRange(row, column).getValue());
});
