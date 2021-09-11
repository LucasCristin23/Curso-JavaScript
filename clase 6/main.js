//Esto es con Javascript

let tituloJS = document.getElementsByTagName("h1")
let classJS = document.getElementsByClassName("text1")
let IDJS = document.getElementById("sub")
let btn = document.getElementById("btn")

console.log(tituloJS);


//Esto es con Jquery

// ID #        class .         p

let IDJQ = $("#sub")
let classJQ = $(".text1")
let tagJQ = $("h1")
let btnJQ = $("#btn")

console.log(tagJQ);


// IMPORTANTE NO PUEDO MEZCLAR JS CON JQ

const mensajeHola = () => {
    console.log("Hola");
}

//btnJQ.addEventListener("click",mensajeHola)

let divOlaCoder = $("#olaCoders")