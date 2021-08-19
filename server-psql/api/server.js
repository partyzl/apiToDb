const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const phoneRoutes = ('./controllers/phoneBook');

server.use('/', phoneRoutes);

server.get('/', (req, res) => res.send('Hello, world!'));

module.exports = server;

