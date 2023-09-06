// This Function would protect your column from being edited by anyone but the owner of the sheet
function protectColumnForAppOnly() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("C:C"); // Change "C:C" to the column you want to protect
  
  var protection = range.protect().setDescription('App Only Protection');
  
  // Remove all editors so only the script can modify the range.
  protection.removeEditors(protection.getEditors());
  
  if (protection.canDomainEdit()) {
    protection.setDomainEdit(false);
  }
}
