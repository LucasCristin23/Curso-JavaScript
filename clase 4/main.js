//-------STORAGE Y JSON
class producto{
    constructor(precio,cantidad){
        this.precio = precio
        this.cantidad = cantidad
    }
}

const producto1 = new producto(4000,5) 
const productojson = JSON.stringify(producto1)

console.log();
sessionStorage.setItem("producto1",productojson)

