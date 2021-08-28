
let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"))

/*
let seccionCarrito = document.querySelector(`#productos`)
let divContenedorDeTodasLasBebidas = document.createElement(`div`)
seccionCarrito.appendChild(divContenedorDeTodasLasBebidas);
*/
let tbCarrito = document.querySelector("#tbCarrito")

for (let index = 0; index < listaCarrito.length; index++) {
    let trCarrito = document.createElement("tr");
    let thNumeroBebida = document.createElement("th");
    thNumeroBebida.textContent = index + 1;
    thNumeroBebida.setAttribute("scope", "row");
    let tdNombreBebida = document.createElement("td");
    tdNombreBebida.textContent = listaCarrito[index].nombreBebida;
    let tdPrecioBebida = document.createElement("td");
    tdPrecioBebida.textContent = listaCarrito[index].precio;
    let tdTotalBebida = document.createElement("td");
    tdTotalBebida.textContent = listaCarrito[index].precio;
    let tdBtnDelete = document.createElement("td")
    let btndelete = document.createElement("button");
    btndelete.setAttribute("class", "btn-close")


    tbCarrito.appendChild(trCarrito);
    trCarrito.appendChild(thNumeroBebida);
    trCarrito.appendChild(tdNombreBebida);
    trCarrito.appendChild(tdPrecioBebida);
    trCarrito.appendChild(tdTotalBebida);
    trCarrito.appendChild(tdBtnDelete);
    tdBtnDelete.appendChild(btndelete);

    btndelete.addEventListener("click",() =>{
        tbCarrito.removeChild(trCarrito)
        listaCarrito.splice(index,1)
        localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito))
        window.location.reload()
        thNumeroBebida.textContent = index + 1;
        })
}



/*
let btndelete = document.createElement("button");
    btndelete.setAttribute("class", "btn-close")
*/
/*
<button type="button" class="btn-close" aria-label="Close"></button>
*/


/*
let divContenedordeBebidas = document.createElement(`div`)
    let nombreProducto = document.createElement (`p`)
    nombreProducto.textContent = `ola ${listaCarrito[index].nombreBebida}`
    let cantidadProducto = document.createElement (`p`)
    cantidadProducto.textContent = `ola ${listaCarrito[index].precio}`
    let totalProducto = document.createElement (`p`)
    totalProducto.textContent = `ola $${listaCarrito[index].precio}`

    divContenedorDeTodasLasBebidas.appendChild(divContenedordeBebidas);
    divContenedordeBebidas.appendChild(nombreProducto);
    divContenedordeBebidas.appendChild(cantidadProducto);
    divContenedordeBebidas.appendChild(totalProducto);
*/



