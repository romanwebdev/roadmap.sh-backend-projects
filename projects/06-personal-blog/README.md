# Personal Blog

A simple web-based blogging platform built with Node.js, Express, and EJS. Allows users to view articles and provides an admin interface for creating, editing, and deleting posts with basic authentication.

## Features

- **View Articles**: Browse all blog posts on the homepage and view individual articles.
- **Admin Panel**: Create, edit, and delete articles via a protected admin interface.
- **Authentication**: Basic HTTP authentication for admin routes (`admin:admin` by default).
- **EJS Templating**: Dynamic rendering of pages using EJS templates.
- **Persistent Storage**: Posts are stored in a local file and loaded on server start.
- **Error Handling**: User-friendly error pages for missing articles or authentication failures.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/)
- A web browser

To check if Node.js is installed, run:

```sh
node -v
```

## Usage

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Start the server:**

   ```sh
   npm run start
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

3. **Browse the blog:**

   - Visit [http://localhost:3000](http://localhost:3000) to view all articles.
   - Click on an article to view its details.

4. **Admin actions:**

   - Visit [http://localhost:3000/admin](http://localhost:3000/admin).
   - Enter username `admin` and password `admin` when prompted.
   - Create, edit, or delete articles using the admin interface.

## Example

- View all articles: [http://localhost:3000](http://localhost:3000)
- Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## Link

[roadmap.sh](https://roadmap.sh/projects/personal-blog)
