// On edit to a particular Column, add value from the same row to a new sheet
function AddLinkToOtherSheet(e) {

  var ss = SpreadsheetApp.getActive(); 
  var currentSheet = ss.getActiveSheet();
  var trackerSheet = SpreadsheetApp.openById("<Sheet ID>");

  if(trackerSheet) {
    var testPage = trackerSheet.getSheetByName("<Page Name>");

    if(testPage) {
      var range = e.range;
      var value = range.getValue();

      // Check if column 5 was edited  
      if(range.getColumn() == 5 && value == "Interested") { // You can check for any value

        // Get value from column 3 of CURRENT sheet
        var col2Value = currentSheet.getRange(range.getRow(), 2).getValue(); // Get the value from any row
        
        testPage.appendRow([new Date(), col2Value]);
      }
    }
  }
}
// If this does not work you might need to add a trigger in the Tools>Triggers
