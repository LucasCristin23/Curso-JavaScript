/*-------------------------Afterclass N°1
let numero = parseInt(prompt("Ingrese el numero que mas le guste"))
let numero1 = parseInt(prompt("Ingrese otro numero keloke"))
let operacion = (numero + numero1)
alert("El resultado de si operacion ya que no la sabe hacer usted es " + operacion)
*/

//------------------------ANOTACIONES----------------------------------
//-----SI EN VEZ DE NUMBER PONEMOS parseInt TE TIRA NUMEROS SIN DECIMALES (REDONDEA).
//-----SI PONEMOS ANTES DE NUMBER O PARSEINT MATH.RAUND TE REDONDEA EL NUMERO DE MANERA MAS PRECISA.
//-----EL Parcefloat ES PARA QUE EL NUMERO SEA TODO CON DECIMALES.
//-----CON EL PARCEINT Y PARCENT FLOAT SOLO TOMA LOS NUMEROS


//-------------------Afterclass Clase 3
//--Objeto
/*
let bebida1 = {
    nombre:"Fernet",
    contenido:500
}
console.log(bebida1)
*/

//---Objeto constructor---Entidad de datos
/*
class bebidas{
    constructor(nombre,contenido,cantidad){
        this.nombre = nombre;
        this.contenido = contenido;
        this.cantidad = cantidad;
    }
}

//Array----Lista
const listaDeBebidas = []

//----Funciones
const ingresarBebida = () => {
    let nombre = prompt("Ingresa el nombre de la bebida")
    let contenido = prompt("Cuanto contiene la bebida")
    let cantidad = prompt("Cuantos litros trajiste")

    const  bebida1 = new bebidas (nombre, contenido, cantidad)
    listaDeBebidas.push(bebida1)
    console.log(listaDeBebidas);
}


//--Aca llamo a la funcion asi creo nuevas bebidas
ingresarBebida()
ingresarBebida()
*/

//----------AFTERCLASS DE GONZA
let h1 = document.querySelector("h1")

h1.addEventListener("click", () =>{
    h1.toggleAttribute("class", "ola")
})