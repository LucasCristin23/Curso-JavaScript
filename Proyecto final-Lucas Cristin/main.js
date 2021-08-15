//----Clases y objetos
class bebidas{
    constructor (nombreBebida, precio,  cantidad, disp){
        this.nombreBebida = nombreBebida
        this.precio = precio
        this.cantidad = cantidad
        this.disp = disp
    }
}

const listaDeBebidas = []

const fernet = new bebidas (`Fernet`, 500 , 20, true)
const gancia = new bebidas (`Gancia`, 300, 30, true)
const vodka = new bebidas (`Vodka`, 700, 15, true)
listaDeBebidas.push(fernet, gancia, vodka)

//---Variables, constantes y selectores
const nombre = prompt("Ingrese su Nombre")
alert(`Hola ${nombre}`)
let totalCompra = 0
let seguirComprando = true

//---Funciones
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
