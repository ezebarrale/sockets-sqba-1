var socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexion con el servidor');
});

//Los emit envian información
socket.emit('enviarMensaje', {
    usuario: 'Ezequiel',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor: ', mensaje);

});