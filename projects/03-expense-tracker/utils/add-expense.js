const fs = require('node:fs/promises');
const validateAmount = require('./validate-amount');

const addExpense = async (filePath, description, amount) => {
  try {
    validateAmount(amount);
    const id = Date.now();
    const date = new Date().toISOString();
    const record = `${id},${date},${description},${amount}\n`;

    await fs.writeFile(filePath, record, { flag: 'a' });
    console.log(`Expense added successfully (ID: ${id})`);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = addExpense;
