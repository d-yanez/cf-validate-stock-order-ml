exports.myFunction = (req, res) => {
    console.log("[myFunction] init")
    if (req.method === 'POST') {
        const data = req.body; // Obtener datos del cuerpo del POST
        // Procesar la solicitud
        console.log(data)
        res.status(200).send(`Datos recibidos: ${JSON.stringify(data)}`);
    } else {
        res.status(405).send('Método no permitido');
    }
    console.log("[myFunction] ends")
};
