// 数値をカンマで区切る

const sheet = App.getActiveSheet();

sheet.getActiveRange().forEach(function(cell, value, row, column){
  cell.setValue(value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
});
