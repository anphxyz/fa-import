import * as XLSX from 'xlsx';
export const ReadXLS = file => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = evt => {
      /* Parse data */
      const bufferStream = evt.target.result,
        workbook = XLSX.read(bufferStream, { type: 'binary' }),
        retData = {};
      if (!workbook.SheetNames.length)
        reject('No data found!')

      /* loop worksheets */
      for (let sheetName of workbook.SheetNames) {
        const fc550 = getFC550FromSheetName(sheetName),
          worksheet = workbook.Sheets[sheetName],
          /* Convert object of arrays */
          csv = XLSX.utils.sheet_to_csv(worksheet, { FS: '#qb#', header: 1 });

        //csv break by \n          
        let csvArray = csv.split('\n');
        
        csvArray.forEach((row, i) => {
          if (!row.indexOf('#qb#')) {
            let lastSv251 = csvArray[i - 1].split('#qb#')[0].replace('#hide#', '');
            csvArray[i] = '#hide#' + lastSv251 + row;
          }
        })

        retData[fc550] = csvArray;
      }
      resolve(retData);
    };
    reader.readAsBinaryString(file);
  });
}

const getFC550FromSheetName = shName => {
  shName = _removeUnicode(shName.toLowerCase());
  return shName.match(/\(co\)|\(m\)/g) ? 'M' :
    shName.match(/\(mo\)|\(o\)/g) ? 'O' :
      shName.match(/\(dien\)|\(e\)/g) ? 'E' :
        shName.match(/\(nhot\)|\(t\)/g) ? 'T' : 'E';
}