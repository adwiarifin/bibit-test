const app = require('./app');
const http = require('http');
const { normalizePort, onError, onListening } = require('./lib');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('error', (error) => onError(port, error));
server.on('listening', () => onListening(server));