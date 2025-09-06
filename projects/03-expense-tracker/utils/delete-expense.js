const fs = require('node:fs/promises');

const deleteExpense = async (filePath, expenseId) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    let isDeleted = false;

    const filtered = lines.filter((line, idx) => {
      if (idx === 0) return true; // keep header
      const [id] = line.split(',');

      if (id == String(expenseId)) isDeleted = true;
      return id !== String(expenseId);
    });

    if (!isDeleted) {
      console.log('Expense with such id does not exist');
      return;
    }

    await fs.writeFile(filePath, filtered.join('\n') + '\n', 'utf8');
    console.log('Expense deleted successfully');
  } catch (error) {
    console.error(error);
  }
};

module.exports = deleteExpense;
