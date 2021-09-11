///////////////////////////////////////////////////////////////////////////////////////////////////
//-------------------ENTIDAD: CLASES Y OBJETOS-----------------------------------------///////////
/////////////////////////////////////////////////////////////////////////////////////////////////
class bebidas{
    constructor (nombreBebida, precio,  cantidad, disp){
        this.nombreBebida = nombreBebida
        this.precio = precio
        this.cantidad = cantidad
        this.disp = disp
    }
}


const listaDeBebidas = []
const listaCarrito = []
/////////////////////////////////////////////////////////////////////////////////////////////////
//---------------------VARIABLES, CONSTANTES Y SELECTORES----------------------------///////////
///////////////////////////////////////////////////////////////////////////////////////////////
//---Declaracion de las bebidas
const fernet = new bebidas (`Fernet`, 500 , 20, true)
const gancia = new bebidas (`Gancia`, 300, 30, true)
const vodka = new bebidas (`Vodka`, 700, 15, true)
const vinoTermidor = new bebidas (`Vino-Termidor`,150, 0, false)
const VinoDada = new bebidas (`Vino-Dada`, 400, 0, false)
listaDeBebidas.push(fernet, gancia, vodka, vinoTermidor, VinoDada)

const listaDeBebidasJSON = JSON.stringify(listaDeBebidas)
localStorage.setItem("listaDeBebidas", listaDeBebidasJSON)

let divContenedordeBebidas = document.querySelectorAll(".contenedorBebidas")
let zonaTouchBebidas = document.querySelectorAll(".zonaTouch")

//////////////////////////////////////////////////////////////////////////////////////////////
//---------------------FUNCIONES--------------------------------------------------///////////
////////////////////////////////////////////////////////////////////////////////////////////
//----AGREGAR BOTON A LAS BEBIDAS
const botonCarrito = () =>{
    for (let i = 0; i < divContenedordeBebidas.length; i++){
    let divBotonAgregarCarrito = document.createElement("div")
    divBotonAgregarCarrito.style.display = `none`;
    divBotonAgregarCarrito.setAttribute("id",`divBotonCarrito${i}`)
    let botonAgragarCarrito = document.createElement("button")
    botonAgragarCarrito.textContent = `Agregar al carrito`
    botonAgragarCarrito.setAttribute(`class`,`btn btn-dark`)
    botonAgragarCarrito.setAttribute(`id`,`botonCarrito${i}`)     
    
    divBotonAgregarCarrito.appendChild(botonAgragarCarrito);
    divContenedordeBebidas[i].appendChild(divBotonAgregarCarrito);
    divContenedordeBebidas[i].setAttribute("id",`divContededordeBebidas${i}`);
    zonaTouchBebidas[i].setAttribute("id",`zonaTouch${i}`)
    }
}

//-------SECUENCIA CON JQUERY PARA MOSTRAR Y ESCONDER
let MostrarBotonCarrito = (parametro1, parametro2) => {
    $(`${parametro1}`).on("click", ()=>{
        $(`${parametro2}`).toggle("2000")
    })
}
//////////////////////////////////////////////////////////////////////////////////////////////
//---------------------EVENTOS--------------------------------------------------///////////
////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////
//---------------------LOGICA--------------------------------------------------///////////
////////////////////////////////////////////////////////////////////////////////////////////
botonCarrito()

MostrarBotonCarrito("#zonaTouch0", "#divBotonCarrito0")
MostrarBotonCarrito("#zonaTouch1", "#divBotonCarrito1")
MostrarBotonCarrito("#zonaTouch2", "#divBotonCarrito2")





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

//---Secuencia de comprar
//---Llamo a los tres botones 
let botonCarritoFernet = document.querySelector(`#botonCarrito0`)
let botonCarritoGancia = document.querySelector(`#botonCarrito1`)
let botonCarritoVodka = document.querySelector(`#botonCarrito2`)



botonCarritoFernet.addEventListener(`click`, () =>{
    
        let listaCarritoReset = JSON.parse(localStorage.getItem("listaCarrito"));
        
        if(JSON.parse(localStorage.getItem("listaCarrito")) != null){
            listaCarritoReset.push(fernet)
            let listaCarritoResetJSON = JSON.stringify(listaCarritoReset)
            localStorage.setItem("listaCarrito", listaCarritoResetJSON)
        }else{
            listaCarrito.push(fernet)
            localStorage.setItem("listaCarrito",JSON.stringify(listaCarrito))
        }
})
botonCarritoGancia.addEventListener(`click`,() =>{

    let listaCarritoReset = JSON.parse(localStorage.getItem("listaCarrito"));

    if(JSON.parse(localStorage.getItem("listaCarrito")) != null){
        listaCarritoReset.push(gancia)
        let listaCarritoResetJSON = JSON.stringify(listaCarritoReset)
        localStorage.setItem("listaCarrito", listaCarritoResetJSON)
    }else{
        listaCarrito.push(gancia)
        localStorage.setItem("listaCarrito",JSON.stringify(listaCarrito))
    } 
})
botonCarritoVodka.addEventListener(`click`,() =>{

    let listaCarritoReset = JSON.parse(localStorage.getItem("listaCarrito"));

    if(JSON.parse(localStorage.getItem("listaCarrito")) != null){
        listaCarritoReset.push(vodka)
        let listaCarritoResetJSON = JSON.stringify(listaCarritoReset)
        localStorage.setItem("listaCarrito", listaCarritoResetJSON)
    }else{
        listaCarrito.push(vodka)
        localStorage.setItem("listaCarrito",JSON.stringify(listaCarrito))
    } 
})

//----Mostrar cuantos productos lleva
/*
const MostrarCantidadDeProductos = () =>{
    if(listaCarrito.length != 0){
        let divContadorDeCarrito = document.querySelector(`#contadorDeCarrito`)
        let contadorDeCarrito = document.createElement("p")
        contadorDeCarrito.textContent = listaCarrito.length + 1
        divContadorDeCarrito.appendChild(contadorDeCarrito);
    }
}

    let divContadorDeCarrito = document.querySelector(`#contadorDeCarrito`)
    let contadorDeCarrito = document.createElement("p")
    contadorDeCarrito.textContent = JSON.parse(localStorage.getItem("listaCarrito")).length
    divContadorDeCarrito.appendChild(contadorDeCarrito);
*/