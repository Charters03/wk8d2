const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
const fileContents = fs.readFileSync('./index.html', 'utf-8');

const getContentType = (fileData) => {
  const ext = fileData.split(".")[1];

switch(ext) {
  case "css"
    return "text/css";
  case"jpg"
    return "image/jpg";
  default:
    return "text/plain";
}

}

if (req.method === "GET" && req.url,startsWith('/static') {
  const splitUrl = req.url.split("/static")[1];
  const resBody = fs.readFileSync("./assets" + splitUrl);

  res.statusCode = 200;
  res.setHeader("Content-Type", getContentType(splitUrl));
  res.end(resBody);
  return;
 }

res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end(fileContents);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));