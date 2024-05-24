let Tareas = [];
let accion;

function agregarTar(tarNueva) {
    tarNueva = prompt("¿Qué tarea desea agrregar?");
    Tareas.push(tarNueva);
    alert("Se añadió " + tarNueva + " a tu lista de tareas con éxito.");
    
}
function  lisTarea(params) {
    
}

do{
accion = parseFloat(prompt("Seleccione qué quiere hacer: \n1-Agregar Tarea \n2-Listar Tareas \n3-Editar Tarea \n4-Eliminar Tarea \n0-Salir"));

switch(accion){
    case 1:
        agregarTar();
        break;
    case 2:
        alert("Sus tareas guardadas: \n" + Tareas);
        break;
    
}
}while(accion !==0);
