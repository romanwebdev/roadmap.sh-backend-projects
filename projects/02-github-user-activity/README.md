# GitHub User Activity

A simple command-line interface (CLI) to fetch and display the recent public activity of a GitHub user using Node.js.

## Features

- **Fetch Recent Activity**: Retrieves the latest public events for a specified GitHub user.
- **Readable Output**: Displays activity such as pushes, issues, stars, forks, and repository creations in a human-friendly format.
- **Error Handling**: Informs you if the user is not found or if there are no recent events.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher, for built-in `fetch` support)

To check if Node.js is installed, run:

```sh
node -v
```

## Usage

Navigate to the project directory in your terminal:

```sh
cd roadmap.sh-backend-projects\projects\02-github-user-activity
```

Run the CLI with:

```sh
node github-activity.js <username>
```

Replace `<username>` with the GitHub username you want to check.

### Example

```sh
node github-activity.js octocat
```

If the user exists and has recent public activity, you will see output like:

```
- Pushed 2 commit(s) to octocat/Hello-World

- Starred octocat/Spoon-Knife

- Forked octocat/Hello-World
```

If the user does not exist or has no recent events, you will see an appropriate message.

---

## Link

[roadmap.sh](https://roadmap.sh/projects/github-user-activity)
