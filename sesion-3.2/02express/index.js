//1. Importar express
const express = require ("express");

//2. Crear una instancia de un servidor de express
const app = express(); 

//3. Declaración de rutas
//Un método/verbo de http es una acción que puede realizar un backend
//GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, TRACE, CONNECT ...

//Para registrar una ruta:
//instancia.metodo(ruta, function)
//http://localhost:8080/
app.get('/',function(request, response){
    //send es write() y end() en una sola instrucción
    response.send("Hola mundo");
});



app.get("/acercade", function (request, response) {
    //__dirname es la ruta absoluta donde se encuentra el archivo
	response.sendFile(`${__dirname}/about.html`);
});

// * es una ruta comodín, osea, "cualquiera otra"
// el orden de las rutas importa
app.get("*", function (request, response) {
	response.sendFile(`${__dirname}/404.html`);
});

//4. Escuchar un puerto

app.listen(8080, function(){
    
    console.log("Escuchando puerto 8080");
});