const fs = require('node:fs/promises');
const validateAmount = require('./validate-amount');

const updateExpense = async (
  filePath,
  expenseId,
  newDescription,
  newAmount
) => {
  try {
    validateAmount(newAmount);
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    let isUpdated = false;

    const updated = lines.map((line, idx) => {
      if (idx === 0) return line; // skip header
      const [id, date, description, amount] = line.split(',');
      if (expenseId === id) {
        const updatedDescription = newDescription
          ? newDescription
          : description;
        const updatedAmount = newAmount ? newAmount : amount;
        const record = `${id},${date},${updatedDescription},${updatedAmount}`;
        isUpdated = true;
        return record;
      }
      return line;
    });

    if (!isUpdated) {
      console.log('Expense with such id does not exist');
      return;
    }

    await fs.writeFile(filePath, updated.join('\n') + '\n', 'utf8');
    console.log('Expense updated successfully');
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = updateExpense;
