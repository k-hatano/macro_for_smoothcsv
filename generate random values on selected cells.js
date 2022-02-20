// 選択されたセル上にランダムな数字を生成する

const sheet = App.getActiveSheet();

sheet.getActiveRange().forEach(function(cell, value, row, column){
  cell.setValue(Math.random());
});
