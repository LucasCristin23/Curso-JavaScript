
/*
class producto{
    constructor(precio,cantidad){
        this.precio = precio
        this.cantidad = cantidad
    }
}

const producto1 = new producto(4000,5); 
const productojson = JSON.stringify(producto1);

console.log();
sessionStorage.setItem("producto1",productojson);
*/

//------STORAGE Y JSON
/*
const productos = []

const producto1 = {"nombre":"remera", "modelo":"nike","cantidad": 5}
const producto2 = {"nombre":"remera", "modelo":"adidis","cantidad": 20}
productos.push(producto1, producto2)
const productosJSON = JSON.stringify(productos)

console.log(productosJSON);

const productosParseados = JSON.parse(sessionStorage.getItem("productos"))
console.log(productosParseados);

sessionStorage.setItem("productos", productosJSON)
*/
console.log(document.body)
let headerH = document.getElementsByTagName("h1")
console.log(headerH[0].innerHTML);
