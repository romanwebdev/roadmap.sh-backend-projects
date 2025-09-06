const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'tasks.json');

const showMessage = (message) => {
  process.stdout.write(message);
  process.exit();
};

const validateArgs = (args = [], message = 'Something went wrong\n') => {
  if (args.some((arg) => arg === undefined)) {
    showMessage(message);
  }
};

const writeFile = (tasks, message) => {
  fs.writeFile(jsonPath, JSON.stringify(tasks, null, 2), 'utf-8', (err) => {
    if (err) throw err;
    showMessage(message);
  });
};

const readTasks = (cb) => {
  fs.readFile(jsonPath, 'utf-8', (err, data) => {
    if (err) throw err;
    cb(JSON.parse(data || '[]'));
  });
};

const addTask = () => {
  const description = process.argv[3];
  validateArgs([description], 'Please provide a task description\n');
  readTasks((tasks) => {
    const newTask = {
      id: Date.now(),
      description,
      status: 'todo',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    writeFile(tasks, `Task added successfully (ID: ${newTask.id})\n`);
  });
};

const updateTask = () => {
  const [taskId, description] = [process.argv[3], process.argv[4]];
  validateArgs(
    [taskId, description],
    'Please provide taskId and description\n'
  );
  readTasks((tasks) => {
    const idx = tasks.findIndex((t) => t.id === +taskId);
    if (idx === -1) showMessage('Task not found\n');
    tasks[idx] = {
      ...tasks[idx],
      description,
      updatedAt: new Date().toISOString(),
    };
    writeFile(tasks, `Task updated successfully\n`);
  });
};

const deleteTask = () => {
  const taskId = process.argv[3];
  validateArgs([taskId], 'Please provide taskId\n');
  readTasks((tasks) => {
    const idx = tasks.findIndex((t) => t.id === +taskId);
    if (idx === -1) showMessage('Task not found\n');
    tasks.splice(idx, 1);
    writeFile(tasks, `Task deleted successfully\n`);
  });
};

const changeStatus = (status) => {
  const taskId = process.argv[3];
  validateArgs([taskId], 'Please provide taskId\n');
  readTasks((tasks) => {
    const idx = tasks.findIndex((t) => t.id === +taskId);
    if (idx === -1) showMessage('Task not found\n');
    tasks[idx] = {
      ...tasks[idx],
      status,
      updatedAt: new Date().toISOString(),
    };
    writeFile(tasks, `Task updated successfully\n`);
  });
};

const showTasks = () => {
  const status = process.argv[3];
  if (status && !['done', 'todo', 'in-progress'].includes(status)) {
    showMessage('This status is not valid\n');
  }
  readTasks((tasks) => {
    const result = status
      ? tasks.filter((task) => task.status === status)
      : tasks;
    showMessage(JSON.stringify(result, null, 2));
  });
};

const run = () => {
  if (!fs.existsSync(jsonPath)) {
    fs.writeFileSync(jsonPath, '[]', 'utf-8');
  }
  const command = process.argv[2];
  switch (command) {
    case 'add':
      addTask();
      break;
    case 'update':
      updateTask();
      break;
    case 'delete':
      deleteTask();
      break;
    case 'mark-in-progress':
      changeStatus('in-progress');
      break;
    case 'mark-done':
      changeStatus('done');
      break;
    case 'list':
      showTasks();
      break;
    default:
      showMessage('Unknown command\n');
  }
};

run();
