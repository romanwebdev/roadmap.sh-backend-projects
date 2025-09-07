const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/convert') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { value, from, to } = querystring.parse(body);
      const result = convert(Number(value), from, to);

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Unit Converter</title>
          <link rel="stylesheet" href="http://localhost:5500/styles.css" />
        </head>
        <body>
          <div class="container">
            <h1>Unit Converter</h1>
            <nav>
              <a href="http://localhost:5500/index.html">Length</a>
              <a href="http://localhost:5500/weight.html">Weight</a>
              <a href="http://localhost:5500/temperature.html">Temperature</a>
            </nav>
            <div class="result">
              <p class="result-title">Result of your calculation:</p>
              <p class="result-conversion">${value} ${from}(s) = ${result} ${to}(s)</p>
            </div>
            <a href="http://localhost:5500/index.html">Reset</a>
          </div>
        </body>
      </html>
      `);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

function convert(value, from, to) {
  // ---------- LENGTH ----------
  if (
    [
      'millimeter',
      'centimeter',
      'meter',
      'kilometer',
      'inch',
      'foot',
      'yard',
      'mile',
    ].includes(to)
  ) {
    const toMeters = {
      millimeter: 1 / 1000,
      centimeter: 1 / 100,
      meter: 1,
      kilometer: 1000,
      inch: 0.0254,
      foot: 0.3048,
      yard: 0.9144,
      mile: 1609.344,
    };
    const f = toMeters[from];
    const meters = value * f;

    switch (to) {
      case 'millimeter':
        return meters * 1000;
      case 'centimeter':
        return meters * 100;
      case 'meter':
        return meters;
      case 'kilometer':
        return meters / 1000;
      case 'inch':
        return meters / 0.0254;
      case 'foot':
        return meters / 0.3048;
      case 'yard':
        return meters / 0.9144;
      case 'mile':
        return meters / 1609.344;
    }
  }

  // ---------- WEIGHT ----------
  if (['milligram', 'gram', 'kilogram', 'ounce', 'pound'].includes(to)) {
    const toGrams = {
      milligram: 1 / 1000,
      gram: 1,
      kilogram: 1000,
      ounce: 28.349523125,
      pound: 453.59237,
    };
    const f = toGrams[from];
    const grams = value * f;

    switch (to) {
      case 'milligram':
        return grams * 1000;
      case 'gram':
        return grams;
      case 'kilogram':
        return grams / 1000;
      case 'ounce':
        return grams / 28.349523125;
      case 'pound':
        return grams / 453.59237;
    }
  }

  // ---------- TEMPERATURE ----------
  if (['celsius', 'fahrenheit', 'kelvin'].includes(to)) {
    if (!['celsius', 'fahrenheit', 'kelvin'].includes(from)) return null;

    const celsius =
      from === 'celsius'
        ? value
        : from === 'fahrenheit'
        ? ((value - 32) * 5) / 9
        : value - 273.15;

    switch (to) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        return (celsius * 9) / 5 + 32;
      case 'kelvin':
        return celsius + 273.15;
    }
  }
}
