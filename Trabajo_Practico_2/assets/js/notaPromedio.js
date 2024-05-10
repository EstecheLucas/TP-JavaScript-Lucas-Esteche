let nota1 = parseInt(prompt("Ingrese la primera nota"));
let nota2 = parseInt(prompt("Ingrese la segunda nota"));
let nota3 = parseInt(prompt("Ingrese la tercera  nota"));


let promedio = parseInt((nota1 + nota2 + nota3 )/ 3);
switch (true) {
    case promedio == 1 || promedio <= 3:

        console.log("Nota insuficiente ")
        break;
    case promedio == 4 || promedio == 5:

        console.log("Nota regular ")
        break;
    case promedio == 6 || promedio == 7:

        console.log("Nota buena ")
        break;
    case promedio == 8 || promedio == 9:

        console.log("Nota muy buena ")
        break;
    case promedio == 10:

        console.log("Nota sobresaliente ")
        break;
    default:
        console.log("El valor ingresado no es valido")
}
