var Logger;

function setLogger() {
  var st = SpreadsheetApp.getActiveSpreadsheet();
  var sid = "1CfEzq44D1eE_21stKj3JatzrQk644CEY4BBOpQx4Xa8";
  if(st==null) {
   st = SpreadsheetApp.openById(sid);
  }
  var id = st.getId();
  Logger = useSpreadsheet(id,'Log'); 
  Logger.log('test');
  
}

