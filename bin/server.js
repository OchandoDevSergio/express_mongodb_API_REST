const http = require ('http');

const app = require ('../app.js');

const PORT = 5000;
const server = http.createServer(app);

server.listen(PORT);

server.on('listening', () => {
    console.log(`Servidor levantado y escuchando en el puerto ${PORT}`)
})
