const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la app'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Enviar mensaje a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje', data);

        /* if (mensaje.usuario) {
            callback({
                resp: `TODO SALIO BIEN ${mensaje.usuario}`
            });
        } else {
            callback({
                resp: 'TODO SALIO MAL'
            });
        } */
    })
});