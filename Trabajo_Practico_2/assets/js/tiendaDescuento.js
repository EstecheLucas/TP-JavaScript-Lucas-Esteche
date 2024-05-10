let articulos = parseInt(prompt("Ingrese la cantidad de articulos"));
let precio = parseInt(prompt("Ingrese el precio del articulo"));

let descuento =  0.15;

if (articulos >= 10 && precio >= 20000) {
    let total = (articulos * precio) * (descuento);
    let totaldesc = (articulos *precio) - total ; 

    console.log("El total a pagar es de: ", totaldesc);
}
else {
    console.log("No se supero la cantidad o el precio");
}