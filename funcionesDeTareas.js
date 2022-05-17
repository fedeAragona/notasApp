const fs = require("fs");

let archivoDeTareas = {
    archivos: 'tareas.json',
    leerArchivo: function(){
    let tareas = fs.readFileSync("tareas.json", "utf-8");
    tareas.forEach(function(prop, index){
          console.log(index, prop.titulo);
        })
    }
}

module.exports = archivoDeTareas;