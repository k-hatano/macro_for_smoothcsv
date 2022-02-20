// セルの値を計算する

const sheet = App.getActiveSheet();

sheet.getActiveRange().forEach(function(cell, value, row, column){
  try {
    const newValue = eval(value);
    if (newValue != undefined) {
      cell.setValue(newValue);
    }
  } catch (ignore) {
    
  }
});
