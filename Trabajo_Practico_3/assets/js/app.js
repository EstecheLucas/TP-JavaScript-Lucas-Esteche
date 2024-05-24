let Tareas = [];
let accion;

function agregarTar(tarNueva) {
    tarNueva = prompt("¿Qué tarea desea agrregar?");
    Tareas.push(tarNueva);
    alert("Se añadió " + tarNueva + " a tu lista de tareas con éxito.");
    
}
function  ediTarea(iTareas, modTarea, newTarea){
    modTarea= prompt("¿Qué tarea desea modificar? \n" + Tareas)
    iTareas= Tareas.indexOf(modTarea)
    newTarea=prompt("¿Cuál será el nuevo nombre?")
    Tareas.splice(iTareas, 1, newTarea)
} 
function elimTarea(tareas) {
    modTarea= prompt("¿Qué tarea desea eliminar? \n" + Tareas)
    iTareas= Tareas.indexOf(modTarea)
    Tareas.splice(iTareas, 1)


    
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
    case 3:
        ediTarea();
        break;
    case 4:
        elimTarea();
        break;
    case 0:
        alert("Usted salió del programa")
        break;
    default:
        alert("ERROR: Valor no valido")
    
}
}while(accion !==0);
