//---Primera fase "Ingrese su nombre"
const nombre = prompt("Ingrese su Nombre")
alert(`Hola ${nombre}`)
let totalCompra = 0
let seguirComprando = true

//---Segunda fase
const algoritmo = (edad) => {
    if(edad >=18){
        while(seguirComprando){
            let quecomprar = prompt("Que desea comprar--- Precios: Fernet:$500|Gancia:$300|Vodka:$700")
            switch (quecomprar) {
                case (`fernet`):
                totalCompra = totalCompra + 500
                    break;
                case (`gancia`): 
                totalCompra = totalCompra + 300
                    break;
                case (`vodka`):
                totalCompra = totalCompra + 700
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

const edad = Number(prompt(`Ingrese su edad`)) 
algoritmo(edad)

