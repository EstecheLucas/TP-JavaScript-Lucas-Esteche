let num1 = parseInt(prompt("Ingrese el primer  numero"));
let num2 = parseInt(prompt("Ingrese el segundo  numero"));
let num3 = parseInt(prompt("Ingrese el tercer  numero"));
let primero,tercero,segundo; 

if (num1 <= num2 && num1 <= num3) {
    primero = num1;
    if (num2 <= num3) {
        segundo = num2;
        tercero = num3;
    } else {
        segundo = num3;
        tercero = num2;
    }
} else if (num2 <= num1 && num2 <= num3) {
    primero = num2;
    if (num1 <= num3) {
        segundo = num1;
        tercero = num3;
    } else {
        segundo = num3;
        tercero = num1;
    }
} else {
    primero = num3;
    if (num1 <= num2) {
        segundo = num1;
        tercero = num2;
    } else {
        segundo = num2;
        tercero = num1;
    }
}

console.log("Los números en orden ascendente son:");
console.log(primero);
console.log(segundo);
console.log(tercero);
