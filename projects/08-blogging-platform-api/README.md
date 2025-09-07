# Blogging Platform API

A simple RESTful API built with Node.js, Express, and MongoDB for managing blog posts. Supports creating, reading, updating, and deleting posts, with validation and flexible querying.

## Features

- **CRUD Operations**: Create, read, update, and delete blog posts.
- **Query Filtering**: Search posts by title, content, or category using query parameters.
- **Validation**: Ensures post data is valid before saving or updating.
- **Error Handling**: Returns clear error messages for invalid requests or missing resources.
- **Environment Variables**: Configure database connection and other settings via `.env`.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local or remote instance)

To check if Node.js is installed, run:

```sh
node -v
```

## Usage

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Configure environment variables:**

   - Copy `.env.example` to `.env` in the project directory.
   - Fill in your MongoDB connection string and other required settings.

3. **Start MongoDB server (if it works locally).**

4. **Run the API server:**

   ```sh
   npm run start
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

5. **API Endpoints:**

   - **Get all posts (with optional filters):**
     ```
     GET /posts?title=example&category=tech
     ```
   - **Get a single post:**
     ```
     GET /posts/:id
     ```
   - **Create a post:**
     ```
     POST /posts
     ```
     Body (JSON):
     ```json
     {
       "title": "My First Post",
       "content": "Hello world!",
       "category": "general",
       "tags": ["life"]
     }
     ```
   - **Update a post:**
     ```
     PUT /posts/:id
     ```
     Body (JSON): same as above.
   - **Delete a post:**
     ```
     DELETE /posts/:id
     ```

## Example

```sh
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Hello","content":"Blog post content","category":"general"}'
```

---

## Link

[roadmap.sh](https://roadmap.sh/projects/blogging-platform-api)
