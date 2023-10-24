const express = require('express');
const router = express.Router();
 const db = require('../db'); // Importa el módulo de la base de datos

router.post('/index.html', (req, res) => {
    const { nombreUsuario, password } = req.body;

     //Realiza la verificación de las credenciales utilizando la conexión a la base de datos
    const query = 'SELECT * FROM usuarios WHERE nombreUsuario = ? AND password = ?';
    db.query(query, [nombreUsuario, password], (error, results) => {
        if (error) {
            console.error('Error en la consulta a la base de datos:', error);
            res.status(500).json({ success: false });
        } else {
            if (results.length > 0) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        }
    });
 });
module.exports = router;
