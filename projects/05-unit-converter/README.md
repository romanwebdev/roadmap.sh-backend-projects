# Unit Converter

A simple web-based unit converter built with Node.js and vanilla HTML/CSS. Convert values between different units of length, weight, and temperature using a browser interface and a Node.js backend.

## Features

- **Length Conversion**: Convert between millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles.
- **Weight Conversion**: Convert between milligrams, grams, kilograms, ounces, and pounds.
- **Temperature Conversion**: Convert between Celsius, Fahrenheit, and Kelvin.
- **Web Interface**: Three separate HTML pages for length, weight, and temperature conversions.
- **Node.js Backend**: Handles conversion logic and returns results to the browser.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (VS Code extension or similar)
- A web browser

To check if Node.js is installed, run:

```sh
node -v
```

## Usage

> **Important:** You must use Live Server (or a similar static server) and be inside the `05-unit-converter` directory for the app to work correctly. The Node.js backend listens on port 3000, while Live Server serves the HTML/CSS/JS files (typically on port 5500).

1. **Start the Node.js server:**

   Open a terminal in the `05-unit-converter` directory and run:

   ```sh
   node server.js
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

2. **Open the HTML pages with Live Server:**

   - Right-click `index.html`, `weight.html`, or `temperature.html` in VS Code and select "Open with Live Server".
   - Make sure you are serving from the `05-unit-converter` directory.

   This will open the page in your browser (usually at [http://localhost:5500](http://localhost:5500)).

3. **Convert units:**

   - Enter a value, select the units to convert from and to, and submit the form.
   - The result will be displayed on the page after the server processes your request.

## Example

1. Open `index.html` with Live Server in your browser.
2. Enter `100`, select `meters` to `kilometers`, and click "Convert".
3. The result will be shown as:  
   `100 meter(s) = 0.1 kilometer(s)`

---

## Link

[roadmap.sh](https://roadmap.sh/projects/unit-converter)
