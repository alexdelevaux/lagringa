const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'on7117SQL',
    database: 'lbd201807comercio', // BD de prueba. 
    port: 3306
});



function mostrarResultado(results) {
    results.forEach(element => {
        console.log('========================');
        // console.log(`Nombre ${element.nombre}`);
        // console.log(`Apellido ${element.apellido}`);
        // console.log(`Usuario ${element.usuario}`);
        for (const key in element) {
            if (element.hasOwnProperty(key)) {
                const elemento = element[key];
                console.log(`${key}: ${elemento}`);
            }
        }
    });
}

connection.connect(function(err) {
    if (err) {
        console.error('Error conectándose a la DB: ' + err.stack);
        return;
    }

    console.log(`Conectado a la base de datos`);
});

function listarRubros() {
    connection.query({
            sql: 'SELECT * FROM `rubros`',
            timeout: 40000,

        },
        function(error, results, fields) {
            mostrarResultado(results);
        }
    )
}

listarRubros();

connection.end();