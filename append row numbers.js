// 行番号を追加する

const sheet = App.getActiveSheet();

sheet.insertColumnBefore(1);
sheet.getRange(1, 1, sheet.getNumRows(), 1).forEach(function(cell, value, row, column){
  sheet.getRange(row, 1).setValue(row);
});
