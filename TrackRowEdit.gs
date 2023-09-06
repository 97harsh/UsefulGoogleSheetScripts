// Track when row was last edited into a different column
function onEdit(e) {
  var sheet = e.source.getActiveSheet();
  var activeRange = e.range;
  var columnToCheck = 2; // Change this to the column number you want to check. 1 = Column A, 2 = Column B, etc.
  var dateColumn = 3; // Change this to the column number where you want the date to appear.
  
  if (activeRange.getColumn() == columnToCheck) {
    var currentDate = new Date();
    var formattedDate = Utilities.formatDate(currentDate, Session.getScriptTimeZone(), "yyyy-MM-dd"); // modify to the date format you wish to insert into
    var targetCell = sheet.getRange(activeRange.getRow(), dateColumn);
    targetCell.setValue(formattedDate);
  }
}
