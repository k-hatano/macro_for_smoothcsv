// 合計、平均値、最大値、最小値を計算

const sheet = App.getActiveSheet();
const rows = sheet.getNumRows();
const columns = sheet.getNumColumns()

let sum = 0;
let numCount = 0;
let nanCount = 0;
let max = undefined;
let min = undefined;

sheet.getActiveRange().forEach(function(cell, value, row, column){
  const floatValue = parseFloat(value);
  if (isNaN(floatValue)) {
    nanCount++;
  } else {
    sum += floatValue;
    numCount++;
    if (max == undefined || max < floatValue) {
      max = floatValue;
    }
    if (min == undefined || min > floatValue) {
      min = floatValue;
    }
  }
});

const average = sum / numCount;
let message = "sum = " + sum + "\naverage = " + sum + " / " + numCount + " = " + average;
message += "\nmax = " + max + "\nmin = " + min;
if (nanCount > 0) {
  message += "\n\n[ **Caution** Values in " + nanCount + " cells are not numbers. ]"
}
Window.alert(message);

