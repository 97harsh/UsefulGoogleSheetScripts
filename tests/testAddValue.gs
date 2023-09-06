
function test_AddLinkToOtherSheet() {

  // Create mock data
  var sheetName = 'Sheet1';
  var row = 3;
  var col3Value = 'Apple';
  var col5Value = 'Interested';

  // Get mock sheet and range
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var range = sheet.getRange(row, 5);

  // Set value in column 5
  range.setValue(col5Value); // Modify the value

  // Create mock event object
  var event = {
    range: range,
    value: col5Value
  };

  // Call function with mock data
  AddLinkToOtherSheet(event);

  // Check if value was appended
  var testPage = SpreadsheetApp.openById("<SpreadSheet Name>").getSheetByName('<Page Name>');
  var result = testPage.getRange(testPage.getLastRow(), 2).getValue();

  // Log result
  Logger.log('Test result: ' + result);

}