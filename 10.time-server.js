const net = require('net');
const strftime = require('strftime');

const port = process.argv[2];

const server = net.createServer((socket) => {
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const d = now.getDate();
    const h = now.getHours();
    const min = now.getMinutes();

    socket.write(strftime('%Y-%m-%d %H:%M') + '\n');

    socket.end();
});
server.listen(port);
