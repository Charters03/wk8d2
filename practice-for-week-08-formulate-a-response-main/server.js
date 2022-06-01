const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/css")
  res.statusCode = 200;
  
  const responseBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World!</title>
    </head>
    <body>
      <h1>Hello there!</h1>
    </body>
    </html>
  `;

  res.end(responseBody);
});

