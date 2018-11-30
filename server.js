console.log('testando')

const http = require('http');
const express = require('express');
const debug = require('debug')('nodestr:server');

const app = express();
const port = 3000;
app.set('port', port);

const server = http.createServer(app);
const router = express.Router();
var route = router.get('/', (req, res, next) => {
  res.status(200).send({
    title: "Node API",
    version: "0.0.1"
  });
});
var pin = router.get('/pins/', (req, res, next) => {
  res.status(200).send({
    title: "Pins",
    version: "0.0.1"
  });
});

app.use('/', route);
app.use('/', pin);
server.listen(port);
console.log('API rodando na porta ' + port);
