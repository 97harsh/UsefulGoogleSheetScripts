// Google script to send email based on some conditions
function sendEmail() {

  var sheet = SpreadsheetApp.getActiveSheet();

  // Get all data
  var data = sheet.getDataRange().getValues();

  // Filter rows 
  var rowsToEmail = data.filter(row => {
    return row[4] > 2 && row[5] == ''; // Change conditions here
  });

  if(rowsToEmail.length > 0) {

    // Build email body text 
    var body = rowsToEmail.map(row => {
      return row.join(', '); 
    }).join('\n\n');

    // Send email  
    GmailApp.sendEmail(
      '<Email address>', 
      '<Subject of Email>',
      body
    );

  }

}
// After this; don't forget to add trigger in the Trigger section
