# Weather API

A simple RESTful API built with Node.js and Express to fetch current and forecast weather data for any city using the Visual Crossing Weather API. Includes caching with Redis, rate limiting, and environment variable configuration.

## Features

- **Get Weather by City**: Retrieve weather data for any city via a simple HTTP GET request.
- **Caching**: Uses Redis to cache weather responses for 12 hours, reducing API calls and speeding up responses.
- **Rate Limiting**: Limits each client to 20 requests per 15 minutes to prevent abuse.
- **Environment Variables**: API keys and Redis address are configured via environment variables.
- **Error Handling**: Returns clear error messages if the city is not found or if something goes wrong.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Redis](https://redis.io/) server running locally or remotely
- Visual Crossing Weather API key ([get one here](https://www.visualcrossing.com/weather-api))
- [npm](https://www.npmjs.com/)

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
   - Fill in your Visual Crossing API key and Redis address:

     ```
     API_KEY=your_visualcrossing_api_key
     REDIS_URI=your_redis_connection_string
     ```

3. **Start your Redis server (if it works locally).**

4. **Run the server:**

   ```sh
   npm run start
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

5. **Fetch weather data:**

   Send a GET request to:

   ```
   http://localhost:3000/weather/<city>
   ```

   Replace `<city>` with the name of the city you want weather data for.

### Example

```sh
curl http://localhost:3000/weather/London
```

The response will be a JSON object containing weather details for London.

---

## Link

[roadmap.sh](https://roadmap.sh/projects/weather-api-wrapper-service)
