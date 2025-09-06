# Task Tracker

A simple command-line tool for managing tasks using Node.js. This tool allows you to add, update, delete, and change the status of tasks, all stored in a local JSON file.

## Features

- **Add Tasks**: Create new tasks with a description.
- **Update Tasks**: Modify the description of existing tasks.
- **Delete Tasks**: Remove tasks by their ID.
- **Change Status**: Mark tasks as `todo`, `in-progress`, or `done`.
- **List Tasks**: View all tasks or filter by status.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)

To check if Node.js is installed, run:

```sh
node -v
```

## Usage

Navigate to the project directory in your terminal:

```sh
cd roadmap.sh-backend-projects\projects\01-task-tracker
```

Run commands using:

```sh
node task-cli.js <command> [arguments]
```

### Commands

- **Add a Task**

  ```sh
  node task-cli.js add "Task description"
  ```

  Example:

  ```sh
  node task-cli.js add "Buy groceries"
  ```

- **Update a Task**

  ```sh
  node task-cli.js update <taskId> "New description"
  ```

  Example:

  ```sh
  node task-cli.js update 1712345678901 "Buy groceries and cook dinner"
  ```

- **Delete a Task**

  ```sh
  node task-cli.js delete <taskId>
  ```

  Example:

  ```sh
  node task-cli.js delete 1712345678901
  ```

- **Mark Task as In Progress**

  ```sh
  node task-cli.js mark-in-progress <taskId>
  ```

  Example:

  ```sh
  node task-cli.js mark-in-progress 1712345678901
  ```

- **Mark Task as Done**

  ```sh
  node task-cli.js mark-done <taskId>
  ```

  Example:

  ```sh
  node task-cli.js mark-done 1712345678901
  ```

- **List All Tasks**

  ```sh
  node task-cli.js list
  ```

- **List Tasks by Status**

  ```sh
  node task-cli.js list <status>
  ```

  Where `<status>` can be `todo`, `in-progress`, or `done`.

  Example:

  ```sh
  node task-cli.js list done
  ```

---

## Link

[roadmap.sh](https://roadmap.sh/projects/task-tracker)
