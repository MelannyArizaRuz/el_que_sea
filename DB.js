// const mysql = require('mysql2');

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'soft_academico_atcul'
// });

// db.connect(err => {
//     if (err) {
//         console.error('Error de conexión a la base de datos:', err);
//     } else {
//         console.log('Conexión exitosa a la base de datos MySQL');
//     }
// });

// module.exports = db;


const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'soft_academico_atcul'
});

db.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos MySQL');
    }
});

module.exports = db;

