// 疑似棒グラフを次の列に追加

const sheet = App.getActiveSheet();
const rows = sheet.getNumRows();
const columns = sheet.getNumColumns();

const column = sheet.getActiveRange().getColumn();

sheet.insertColumnAfter(column);

sheet.getRange(1, column, rows, 1).forEach(function(cell, value, r, c){
  const intValue = parseInt(value);
  if (isNaN(intValue)) {
    return;
  }
  let bars = "";
  for (let i = 0; i < intValue; i++) {
    bars += "|";
  }
  sheet.getRange(r, c + 1).setValue(bars);
});

