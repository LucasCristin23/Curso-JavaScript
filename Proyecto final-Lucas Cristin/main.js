//----Clases y objetos
class bebidas{
    constructor (nombreBebida, precio,  cantidad, disp){
        this.nombreBebida = nombreBebida
        this.precio = precio
        this.cantidad = cantidad
        this.disp = disp
    }
}

//---Variables, constantes y selectores
const listaDeBebidas = []

const fernet = new bebidas (`Fernet`, 500 , 20, true)
const gancia = new bebidas (`Gancia`, 300, 30, true)
const vodka = new bebidas (`Vodka`, 700, 15, true)
const vinoTermidor = new bebidas (`Vino-Termidor`,150, 0, false)
const VinoDada = new bebidas (`Vino-Dada`, 400, 0, false)
listaDeBebidas.push(fernet, gancia, vodka, vinoTermidor, VinoDada)

//---Saludo y vericidad de edad
/*
const nombre = prompt("Ingrese su Nombre")
alert(`Hola ${nombre}`)
let totalCompra = 0
let seguirComprando = true
const verificarEdad = Number(prompt(`Ingrese su edad`))
*/

//---------Storage
const listaDeBebidasJSON = JSON.stringify(listaDeBebidas)
localStorage.setItem("listaDeBebidas", listaDeBebidasJSON)

//---------Dom
let seccionProximamente = document.querySelector("#seccionProximamente")
let divProximamente = document.createElement("div")
let pProximamente = document.createElement("p")
pProximamente.textContent = `Proximamente nuevas bebidas`

let pProximamenteBebidas = document.createElement("p")
pProximamenteBebidas.textContent = `Como ${vinoTermidor.nombreBebida} $${vinoTermidor.precio} ${VinoDada.nombreBebida} $${VinoDada.precio}`
divProximamente.appendChild(pProximamente)
divProximamente.appendChild(pProximamenteBebidas)
seccionProximamente.appendChild(divProximamente)
divProximamente.setAttribute("class","divJS")

//----AGREGAR BOTON A LAS BEBIDAS
let divContenedordeBebidas = document.querySelectorAll(".contenedorBebidas")

const botonCarrito = () =>{
    for (let i = 0; i < divContenedordeBebidas.length; i++){
    let botonAgragarCarrito = document.createElement("button")
    botonAgragarCarrito.textContent = `Agregar al carrito`
    botonAgragarCarrito.setAttribute(`class`,`btn btn-dark`)
    botonAgragarCarrito.setAttribute(`id`,`botonCarrito${i}`)     

    divContenedordeBebidas[i].appendChild(botonAgragarCarrito)
    }
}

botonCarrito()

//---Secuencia de comprar
//---Llamo a los tres botones 
let botonCarritoFernet = document.querySelector(`#botonCarrito0`)
let botonCarritoGancia = document.querySelector(`#botonCarrito1`)
let botonCarritoVodka = document.querySelector(`#botonCarrito2`)



botonCarritoFernet.addEventListener(`click`,() =>{
    listaCarrito.push(fernet)
    let listaCarritoJSON = JSON.stringify(listaCarrito)
    localStorage.setItem("listaCarrito", listaCarritoJSON)
})
botonCarritoGancia.addEventListener(`click`,() =>{
    listaCarrito.push(gancia)
    let listaCarritoJSON = JSON.stringify(listaCarrito)
    localStorage.setItem("listaCarrito", listaCarritoJSON)
})
botonCarritoVodka.addEventListener(`click`,() =>{
    listaCarrito.push(vodka)
    let listaCarritoJSON = JSON.stringify(listaCarrito)
    localStorage.setItem("listaCarrito", listaCarritoJSON)
})
const listaCarrito = []
//----Mostrar cuantos productos lleva
if(listaCarrito.length != 0){
    let divContadorDeCarrito = document.querySelector(`#contadorDeCarrito`)
    let contadorDeCarrito = document.createElement("p")
    contadorDeCarrito.textContent = listaCarrito.length + 1
    divContadorDeCarrito.appendChild(contadorDeCarrito);
}




console.log(listaCarrito);
//---Funciones




//------------------------------------LOGICA ANTERIOR QUE SEGUIRE USANDO COMO GUIA--------------------------
/*
const algoritmo = (edad) => {
    if(edad >=18){
        while(seguirComprando){
            let queComprar = prompt("Que desea comprar--- Precios: Fernet:$500|Gancia:$300|Vodka:$700")
            queComprar = queComprar.toLowerCase()
            switch (queComprar) {
                case (`fernet`):
                totalCompra = totalCompra + fernet.precio
                    break;
                case (`gancia`): 
                totalCompra = totalCompra + gancia.precio
                    break;
                case (`vodka`):
                totalCompra = totalCompra + vodka.precio
                    break;
                default:alert("No tenemos esa bebida")
            }
            seguirComprando = confirm(`Hasta ahora lleva $${totalCompra}, ¿Quiere seguir comprando?`)
        }
        let confirmarCompra = confirm(`El total es de $${totalCompra}, ¿Desea continuar?`)
        switch (confirmarCompra) {
            case true:
                let pago= Number(prompt(`¿Con cuanto abona?`))
                if(pago==totalCompra){
                    alert(`¡Muchas gracias por su compra, vuelva pronto!`)
                }
                else if(pago>totalCompra){
                    alert(`Su vuelto es ${pago-totalCompra}`)
                }
                else{
                    alert(`Le falta ${totalCompra-pago}`)
                }
                break;
    
            default:
                alert("Gracias por ingresar a la pagina")
                break;
        }
    }
    else{
        alert(`${nombre} Usted no es mayor, no puede comprar alcohol`)
    }
}


//-----Logica
const edad = Number(prompt(`Ingrese su edad`)) 
algoritmo(edad)

for (const bebidas of listaDeBebidas){
    console.log(bebidas.precio);
    console.log(bebidas.nombreBebida);
}
*/
/*
if(verificarEdad >=18){
    alert(`Puede comprar`)
}else{
    alert(`Usted es menor, no puede comprar`)
}
*/
