/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//import {onRequest} from "firebase-functions/v2/https";
//import * as logger from "firebase-functions/logger";

import * as functions from 'firebase-functions';
import { Request, Response } from 'express';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

//export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// Define la función de Cloud Function
exports.myPostFunction = functions.https.onRequest((req: Request, res: Response) => {
    if (req.method === 'POST') {
        const data = req.body; // Obtiene el contenido de la solicitud POST
        console.log('Data recibida:', data); // Imprime la data en la consola (opcional)

        // Envía una respuesta 200 (OK)
        res.status(200).send('OK'); 
    } else {
        // Si no es un método POST, envía un error 405 (Método no permitido)
        res.status(405).send('Método no permitido');
    }
});