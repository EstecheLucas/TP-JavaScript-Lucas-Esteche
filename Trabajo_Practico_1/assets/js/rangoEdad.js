let edad = prompt("Ingrese su edad")
if(edad >= 0 && edad <= 12){
    console.log("Rango de edad: NiÑo")    
}
if(edad > 13 && edad <= 19){
    
    console.log("Rango de edad: Adolecente")
}
if(edad > 20 && edad <= 59){

    console.log("Rango de edad: Adulto")
}
if(edad > 60 && edad <= 120){

    console.log("Rango de edad: Adulto mayor")
}