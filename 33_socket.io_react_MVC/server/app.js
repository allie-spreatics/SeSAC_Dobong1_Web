const express = require("express");
const http = require("http");
// const socketIO = require("socket.io");

const PORT = 8080;
const app = express();
const server = http.createServer(app);
const socketHandler = require("./sockets");
socketHandler(server);

const cors = require("cors");
app.use(cors());

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
