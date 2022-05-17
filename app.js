const archivos = require("./funcionesDeTareas");

let accion = process.argv[2]  

switch(accion){
    case "listar":
        console.log(archivos.leerArchivo());
        break;
    case undefined:
        console.log("Atencion - tienes que pasar una accion");
        break;
    default:
        console.log("No entiendo qué quieres hacer");
        break;
}

// para actualizar el git
// git status -
// git add .
// git commit -m "mensaje"
// git push asd