const URLGET =  "https://jsonplaceholder.typicode.com/posts";
let isOpen = false;

$("#seccionClientes").append(`<button id="btnClientes" type="button" class="btn btn-dark">Clientes</button>`)
$("#seccionClientes").append(`<div id="clientes"></div>`)
$("#clientes").css("display", "none")

$.get(URLGET, (respuesta, estado) => {
    if(estado === "success"){
        let misClientes = respuesta;
        for(cliente of misClientes){
            $("#clientes").append(`<div class ="contenedorClientes">
                                        <p class="pClientes">Cliente ${cliente.id}</p>
                                        <hr>
                                        <p class="pClientes">Id ${cliente.userId}</p>
                                   </div>`)
        }
    }
})

$("#btnClientes").on("click", () =>{
    $(`#clientes`).toggle("2000")
    $("html").toggleClass("pagCentrada")
    $("footer").toggleClass("pagCentradaFooter")
})
