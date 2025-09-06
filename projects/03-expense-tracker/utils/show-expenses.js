const fs = require('node:fs/promises');

const showExpenses = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');

    const [headerLine, ...lines] = data.trim().split('\n');
    const headers = headerLine.split(',');

    const rows = lines.map((line) => {
      const values = line.split(',');
      return headers.reduce((obj, key, i) => {
        obj[key] = values[i];
        return obj;
      }, {});
    });

    console.table(rows);
  } catch (error) {
    console.error(error);
  }
};

module.exports = showExpenses;
