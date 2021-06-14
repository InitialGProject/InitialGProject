const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: true,
        credentials: true,
        methods: ["GET", "POST"]
    }
});


io.on('connection', (socket) => {
    console.log('Usuario conectado');
    
    // socket.on("test", (objeto) => {
    //     console.log("evento TEST: " + objeto.text)
        
    //     //esto  envia del server al cliente
    //     socket.emit("test2", objeto);
    // });
    socket.on("sendMessage", (messageInfo) => {
        console.log("enviando mensaje")
        //esto  envia del server al cliente
        socket.broadcast.emit("receiveMessage", messageInfo);
    });
});

// app.get('/', (reg, res) => {
//     res.send('<h1>hola</h1>')
// });

http.listen(3000, () => {
    console.log('escucha puerto 3000');
});