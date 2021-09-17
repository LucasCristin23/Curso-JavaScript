//----Variables
let buttonNav = $("#buttomNav");
let threeLines = $("#trheeLines");

let showCrossLine = false


//---Desarrollo
buttonNav.on("click",() =>{
    if(!showCrossLine){
    threeLines.removeClass("navbar-toggler-icon");
    threeLines.addClass("btn-close");
    threeLines.addClass("closeButtom");

    showCrossLine = true;
    }
else{
    threeLines.removeClass("btn-close");
    threeLines.removeClass("closeButtom");
    threeLines.addClass("navbar-toggler-icon");
    showCrossLine = false;}
})
