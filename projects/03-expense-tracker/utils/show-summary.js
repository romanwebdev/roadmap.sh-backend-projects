const fs = require('node:fs/promises');
const validateMonth = require('./validate-month');

const showSummary = async (filePath, month) => {
  try {
    if (month) validateMonth(month);
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');

    const summary = lines.reduce((acc, current, idx) => {
      if (idx === 0) return acc; // skip header

      if (month) {
        const [, date, , amount] = current.split(',');
        const expenseYear = new Date(date).getFullYear();
        const expenseMonth = new Date(date).getMonth();
        const currentYear = new Date().getFullYear();

        if (expenseYear === currentYear && +month === expenseMonth + 1) {
          return acc + +amount;
        } else {
          return acc;
        }
      }
      const amount = current.split(',').pop();
      return acc + +amount;
    }, 0);
    console.log(`Total expenses: $${summary}`);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = showSummary;
