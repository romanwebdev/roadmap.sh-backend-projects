# Expense Tracker

A simple command-line tool for tracking your expenses using Node.js. Add, update, delete, list, and summarize your expenses, all stored in a local CSV file.

## Features

- **Add Expenses**: Record a new expense with a description and amount.
- **Update Expenses**: Modify the description or amount of an existing expense.
- **Delete Expenses**: Remove an expense by its ID.
- **List Expenses**: Display all recorded expenses.
- **Summary**: Show total expenses, optionally filtered by month.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

To check if Node.js is installed, run:

```sh
node -v
```

## Usage

Navigate to the project directory in your terminal:

```sh
cd roadmap.sh-backend-projects\projects\03-expense-tracker
```

Install dependencies:

```sh
npm install
```

Run commands using:

```sh
node expense-tracker.js <command> [options]
```

### Commands

- **Add an Expense**

  ```sh
  node expense-tracker.js add --description "Lunch" --amount 12.50
  ```

- **Update an Expense**

  ```sh
  node expense-tracker.js update --id <expenseId> [--description "New desc"] [--amount 15.00]
  ```

  Example:

  ```sh
  node expense-tracker.js update --id 1712345678901 --description "Dinner" --amount 20.00
  ```

- **Delete an Expense**

  ```sh
  node expense-tracker.js delete --id <expenseId>
  ```

  Example:

  ```sh
  node expense-tracker.js delete --id 1712345678901
  ```

- **List All Expenses**

  ```sh
  node expense-tracker.js list
  ```

- **Show Summary**

  ```sh
  node expense-tracker.js summary
  ```

  Or for a specific month (format: number):

  ```sh
  node expense-tracker.js summary --month 8
  ```

---

## Link

[roadmap.sh](https://roadmap.sh/projects/expense-tracker)
