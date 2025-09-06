const fs = require('fs');

const createCsvFile = (filePath) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, 'ID,Date,Description,Amount\n');
  }
};

module.exports = createCsvFile;
