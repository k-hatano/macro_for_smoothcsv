// 行ごとに合計を計算し、行の最後に追記する

const sheet = App.getActiveSheet();
const rows = sheet.getNumRows();
const columns = sheet.getNumColumns();

sheet.insertColumnAfter(columns);

for (let row = 1; row <= rows; row++) {
  let sum = 0;
  sheet.getRange(row, 1, 1, columns).forEach(function(cell, value, r, c){
    const floatValue = parseFloat(value);
    if (!isNaN(floatValue)) {
      sum += floatValue;
    }
  });
  sheet.getRange(row, columns + 1).setValue(sum);
};
