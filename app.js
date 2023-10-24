// const express = require('express');
// const app = express();
// const port = 3000;


// //Autenticación
// app.use(express.json());

// // Rutas de la aplicación (puede incluir la ruta de autenticación)
// app.use('/index.html', require('./practicas_html_css/index.html'));

// app.listen(port, () => {
//     console.log(`Servidor en ejecución en el puerto ${port}`);
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const loginForm = document.getElementById("login-form");
//     const message = document.getElementById("message");

//     loginForm.addEventListener("submit", function(event) {
//         event.preventDefault();

//         const username = document.getElementById("NombreUsuario").value;
//         const password = document.getElementById("password").value;

//         const data = { nombreUsuario, password };
//         fetch("/index.html", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(data)
//         })
//         .then(response => response.json())
//         .then(data => {
//             if (data.success) {
//                 // Autenticación exitosa
//                 message.textContent = "Autenticación exitosa. Redirigiendo...";
//                 // Redirige al usuario a su área personal, por ejemplo
//                 window.location.href = "/dashboard";
//             } else {
//                 // Autenticación fallida
//                 message.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
//             }
//         })
//         .catch(error => {
//             console.error(error);
//             message.textContent = "Error en la solicitud.";
//         });
//     })
// })

const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Rutas de la aplicación
app.use('/index.html', require('./practicas_html_css/index.html'));
app.use('/api', require('./auth')); // Usando el archivo auth.js para rutas de autenticación

app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombreUsuario = document.getElementById("NombreUsuario").value;
        const password = document.getElementById("password").value;

        const data = { nombreUsuario, password };
        fetch("/api/authenticate", { // La ruta coincide con la definida en auth.js
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Autenticación exitosa
                message.textContent = "Autenticación exitosa. Redirigiendo...";
                // Redirige al usuario a su área personal, por ejemplo
                window.location.href = "/dashboard";
            } else {
                // Autenticación fallida
                message.textContent = "Credenciales incorrectas. Inténtalo de nuevo.";
            }
        })
        .catch(error => {
            console.error(error);
            message.textContent = "Error en la solicitud.";
        });
    });
});
