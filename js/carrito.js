
let listaCarrito = JSON.parse(localStorage.getItem("listaCarrito"))
let tbCarrito = document.querySelector("#tbCarrito")
let btnVaciarCarrito = document.querySelector("#btnVaciarCarrito")

let totalNumero = 0;

//--------Logaritmo imprimir carrito
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
    
        //------Boton Eliminar un elemento del carrito
        btndelete.addEventListener("click",() =>{
            tbCarrito.removeChild(trCarrito)
            listaCarrito.splice(index,1)
            localStorage.setItem("listaCarrito", JSON.stringify(listaCarrito))
            window.location.reload()
            thNumeroBebida.textContent = index + 1;
            })
    }


//-------Boton vaciar carrito 
    btnVaciarCarrito.addEventListener("click", () => {
        localStorage.removeItem("listaCarrito");
        window.location.reload();
    })

//------Mostrar total de la compra
for (let i = 0; i < listaCarrito.length; i++) {
    totalNumero = totalNumero + listaCarrito[i].precio;
}

//-----Logaritmo confirmar compra
if(listaCarrito != null){
    let sectionContinuarCompra = document.querySelector("#sectionContinuarCompra");

    let divNumeroSeccion = document.createElement("div");
    divNumeroSeccion.setAttribute("class","seccionContinuarCompra");
    let divTotalSeccion = document.createElement("div");
    divTotalSeccion.setAttribute("id", "totalCarrito");
    let totalSeccion = document.createElement("p");
    totalSeccion.textContent = `Total`;

    let divButtomSeccion = document.createElement("div");
    divButtomSeccion.setAttribute("id","buttonSection")
    let buttomSeccion = document.createElement("button");
    buttomSeccion.setAttribute("id", "btnContinuarCompra");
    buttomSeccion.setAttribute("class", "btn btn-dark");
    buttomSeccion.textContent = `Continuar Compra`;

    sectionContinuarCompra.appendChild(divNumeroSeccion);
    divNumeroSeccion.appendChild(divTotalSeccion);
    divTotalSeccion.appendChild(totalSeccion);
    divNumeroSeccion.appendChild(divButtomSeccion);
    divButtomSeccion.appendChild(buttomSeccion);

    //----Agregar numero dinamicamente
    let totalCarrito = document.querySelector("#totalCarrito");
    let totalCarritoP = document.createElement("p");
    totalCarritoP.textContent = `$${totalNumero}`;

    totalCarrito.appendChild(totalCarritoP);
}

//-------AGREGAR DINAMICAMENTE SECCION DE DETALLES
let sectionDetalles = document.querySelector("#sectionDetalles");
let btnContinuarCompra = document.querySelector("#btnContinuarCompra");

btnContinuarCompra.addEventListener("click",() => {
    if(sectionDetalles.style.display == "none"){
        sectionDetalles.style.display = "block"
    }else{
        sectionDetalles.style.display = "none";
    }
})

//-----Seccion de confirmacion

let buttomForm = document.querySelector("#btnSubmitDetalles")

let formDetalles = document.querySelector("#formDetalles")

formDetalles.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("formulario enviado");
})


buttomForm.addEventListener("click",() =>{
 //----Tomar valor de los input
let nombreFormDetalles = document.querySelector("#formControlInput1").value;
nombreFormDetalles = nombreFormDetalles.toUpperCase();
let direccionFormDetalles = document.querySelector("#formControlInput2").value;
direccionFormDetalles = direccionFormDetalles.toUpperCase();
let telefonoFormDetalles = document.querySelector("#formControlInput3").value;
let espeificacionesFormDetalles = document.querySelector("#formControlTextarea1").value;

if(nombreFormDetalles != "" && direccionFormDetalles != "" && telefonoFormDetalles != ""){
    let sectionFinalizarCompra = document.createElement("section");
    sectionFinalizarCompra.setAttribute("class","container sectionFinalizarCompra animate__animated animate__backInDown");
    
    let divtituloSectionFinalizarCompra = document.createElement("div");
    
    let pHijoFinalizarCompra = document.createElement("p");
    pHijoFinalizarCompra.textContent = `Finalizar Compra`;
    
    let divTableSectionFinalizarCompra = document.createElement("div");
    divTableSectionFinalizarCompra.setAttribute("id", "divTableFinalizarCompra")
    
    let tableSectionFinalizarCompra = document.createElement("table");
    tableSectionFinalizarCompra.setAttribute("class","table table-dark table-striped");
    
    let tb = document.createElement("tbody");
    
    let trDireccion = document.createElement("tr");
    
    let tdDireccion = document.createElement("td");
    tdDireccion.textContent = `Direccion`;
    
    let tdDireccionJS = document.createElement("td");
    tdDireccionJS.textContent = `${direccionFormDetalles}`
    
    let trNombre = document.createElement("tr");
    
    let tdNombre = document.createElement("td");
    tdNombre.textContent = `Nombre`;
    
    let tdNombreJS = document.createElement("td");
    tdNombreJS.textContent = `${nombreFormDetalles}`
    
    let trTelefono = document.createElement("tr");
    
    let tdTelefono = document.createElement("td");
    tdTelefono.textContent = `Telefono`;
    
    let tdTelefonoJS = document.createElement("td");
    tdTelefonoJS.textContent = `${telefonoFormDetalles}`
    
    let trTotal = document.createElement("tr");
    
    let tdTotal = document.createElement("td");
    tdTotal.textContent = `Total`;
    
    let tdTotalJS = document.createElement("td");
    tdTotalJS.textContent = `$${totalNumero}`;
    
    let btnFinalizarCompra = document.createElement("button");
    btnFinalizarCompra.textContent = "Finalizar Compra";
    btnFinalizarCompra.setAttribute("class","btn btn-dark");
    
    
        document.querySelector("main").appendChild(sectionFinalizarCompra);
        sectionFinalizarCompra.appendChild(divtituloSectionFinalizarCompra);
        divtituloSectionFinalizarCompra.appendChild(pHijoFinalizarCompra);
        sectionFinalizarCompra.appendChild(divTableSectionFinalizarCompra);
        divTableSectionFinalizarCompra.appendChild(tableSectionFinalizarCompra)
        tableSectionFinalizarCompra.appendChild(tb);
        tb.appendChild(trDireccion);
        trDireccion.appendChild(tdDireccion);
        trDireccion.appendChild(tdDireccionJS);
        tb.appendChild(trNombre);
        trNombre.appendChild(tdNombre);
        trNombre.appendChild(tdNombreJS);
        tb.appendChild(trTelefono);
        trTelefono.appendChild(tdTelefono);
        trTelefono.appendChild(tdTelefonoJS);
        tb.appendChild(trTotal);
        trTotal.appendChild(tdTotal);
        trTotal.appendChild(tdTotalJS);
        sectionFinalizarCompra.appendChild(btnFinalizarCompra);
    
        sectionDetalles.style.display = "none";
        document.querySelector("#buttonSection").removeChild(document.querySelector("#btnContinuarCompra"))

        //----Evento click en finalizar
        btnFinalizarCompra.addEventListener("click", () => {
            swal({
                title: "Pedido Enviado",
                text: "Tiempo de espera aproximado: 30 Minutos",
                icon: "success",
                button: "Finalizar",
              });
            
            let btnfin = document.querySelector(".swal-button--confirm")

            //-----Evento finalizar
            btnfin.addEventListener("click", () => {
                localStorage.removeItem("listaCarrito")
                window.location.reload()
            })
        })
}
})



/*
<section class="container sectionFinalizarCompra">
            <div>
                <p>Finalizar compra</p>
            </div>
            <div>
                <table class="table table-dark table-striped">
                    <tbody>
                      <tr>
                        <td>Direccion</td>
                        <td>lalalala</td> 
                      </tr>
                      <tr>
                        <td>Nombre</td>
                        <td>lalalal</td>
                      </tr>
                      <tr> 
                        <td>Telefono</td>
                        <td>lalala</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td>llala</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
            <button class="btn btn-dark">Confirmar</button>
        </section>
*/

