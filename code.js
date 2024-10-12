const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with your Spreadsheet ID
const DATA_RANGE = "Sheet1!A1:F"; // Adjust the range according to your data

function doGet() {
  let html = include('Index'); // This refers to the HTML file
  return HtmlService.createHtmlOutput(html).setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function getData() {
  const range = getSpreadsheetValues(SPREADSHEET_ID, DATA_RANGE);
  const data = range.values;
  const headers = data.shift(); // Remove header row

  const tableData = data.map(row => {
    const obj = {};
    for (let i = 0; i < headers.length; i++) {
      obj[headers[i]] = row[i];
    }
    return obj;
  });

  return tableData;
}

function include(fileName) {
  return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}

function getSpreadsheetValues(spreadsheetId, range) {
  return SpreadsheetApp.openById(spreadsheetId).getRange(range).getValues();
}
