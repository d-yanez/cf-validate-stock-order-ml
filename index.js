const functions = require('firebase-functions');

exports.myPostFunction = functions.https.onRequest((request, response) => {
    if (request.method === 'POST') {
        // Aquí podrías procesar el evento recibido en `request.body` si es necesario.
        const data = request.body; // Obtiene el contenido de la solicitud POST
        console.log('Data recibida:', data); // Imprime la data en la consola (opcional)

        // Envía una respuesta 200 (OK)
        response.status(200).send('OK'); 
    } else {
        // Si no es un método POST, envía un error 405 (Método no permitido)
        response.status(405).send('Método no permitido');
    }
});