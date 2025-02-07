const http = require("http");
const EventEmitter = require('events');
var eventEmitter = new EventEmitter();

let count = 0;
eventEmitter.on('myEvent', (name) => {
    count++;
    console.log(`Home page accessed ${count} times ${name}`);
});

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url == "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        eventEmitter.emit("myEvent","ayan");
        res.end("home page");
    } else if (url == "/product") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("product listing page");
    }
});

let port = 8000;
server.listen(port, () => {
    console.log(`port is running on ${port} ..`);
});