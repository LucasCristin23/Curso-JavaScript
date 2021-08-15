/*
//---LOGARITMO DEL NOMBRE
let nombre = prompt("Ingrese su Nombre")
let confirmar = confirm("¿Queres entrar?")
nombre = nombre.toLocaleLowerCase()

if(nombre == "julian" && confirmar == true){
    alert("XXXXXX")
}
else{
    alert("YYYYYYYYY")
}
*/

//DESAFIOS
let ingreseSuNombre = prompt("Ingrese su Nombre")
let ingreseSuApellido = prompt("Ingrese su apellido")
let edad = Number(prompt("Ingrese su edad"));
let nombreCorrecto = confirm("Su nombre es" + " " + ingreseSuNombre + " " + ingreseSuApellido)
let deseaEntrar = confirm("¿Queres pasar al bar?")


if(nombreCorrecto == true && edad >30 && deseaEntrar == true){
    alert("Puede pasar y debe pagar $100")
}
else if(nombreCorrecto == true && edad >=18 && deseaEntrar == true){
    alert("Puede Ingresar")
}
else if(nombreCorrecto == false){
    alert("Refresque la pag y ingrese su nombre")
}
else if (deseaEntrar == false){
    alert("Lo esperamos pronto")
}
else{
    alert("Usted es menor, no puede Ingresar")
}
