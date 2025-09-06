const { program } = require('commander');
const path = require('path');
const {
  addExpense,
  updateExpense,
  deleteExpense,
  showExpenses,
  showSummary,
  createCsvFile,
} = require('./utils');

const filePath = path.join(__dirname, 'expenses.csv');

createCsvFile(filePath);

program
  .name('Exnpense Tracker')
  .description('A simple command-line expense tracker')
  .version('1.0.0', '-v, --version');

/* Add expense */
program
  .command('add')
  .description('Add expense')
  .requiredOption('--description <value>', 'Expense description')
  .requiredOption('--amount <value>', 'Expense amount')
  .action(({ description, amount }) => {
    addExpense(filePath, description, amount);
  });

/* Update expense */
program
  .command('update')
  .description('Update expense')
  .requiredOption('--id <value>', 'Id of the expense')
  .option('--description <value>', 'Expense description')
  .option('--amount <value>', 'Expense amount')
  .action(({ id, description, amount }) => {
    updateExpense(filePath, id, description, amount);
  });

/* Delete expense */
program
  .command('delete')
  .description('Delete expense')
  .requiredOption('--id <value>', 'Id of the expense')
  .action(({ id }) => {
    deleteExpense(filePath, id);
  });

/* Show all expenses */
program
  .command('list')
  .description('Show all expenses')
  .action(() => {
    showExpenses(filePath);
  });

/* Summary of expenses */
program
  .command('summary')
  .description('Summary of expenses')
  .option('--month <value>', 'Expenses for a specific month')
  .action(({ month }) => {
    showSummary(filePath, month);
  });

program.parse(process.argv);
