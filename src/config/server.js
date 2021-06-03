const port = 3003;

const express = require('express');
const server = express();
const allowCors = require('./cors');

server.use(express.urlencoded({ extended: true}));
server.use(express.json());
server.use(allowCors);

server.listen(port, function() {
    console.log(`Backend is running on port ${port}.`);
});

/*server.get('/', (req, res) => { // apenas para ver se está funcionando
    res.send('OK');
})*/

//server.listen(3000);

module.exports = server;