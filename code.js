const SPREADSHEET_ID = '1ST5As1-P0-NMQEuTwZJa4Cd9AtelFRN67hws3RsNW40';
const DATA_RANGE = "Data!A1:f";

function doGet() {
  let html = include('Index');
  let htmlOutput = {
    html: html,
    metaTags: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  };
  return htmlOutput;
}

function getData() {
  const range = getSpreadsheetValues(SPREADSHEET_ID, DATA_RANGE);
  const data = range.values;

  const headers = data.shift();

  const tableData = data.map(row => {
    const obj = {};
    for (let i = 0; i < headers.length; i++) {
      obj[headers[i]] = row[i];
    }
    return obj;
  });

  console.log(tableData);
  return tableData;
}

function include(fileName) {
  return getHtmlContent(fileName);
}

function getSpreadsheetValues(spreadsheetId, range) {
  // Placeholder for Sheets API call equivalent in JavaScript
  return { values: [] };
}

function getHtmlContent(fileName) {
  // Placeholder for HTML content fetching in JavaScript
  return "";
}
