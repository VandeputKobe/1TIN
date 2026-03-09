function zetOpmaak1(){
    let stylesheet = document.getElementById("stylesheet")
    stylesheet.href = "style/opmaak1.css"
}

function zetOpmaak2(){
    let stylesheet = document.getElementById("stylesheet")
    stylesheet.href = "style/opmaak2.css"
}



function handleLoad(){
    let opmaak1 = document.getElementById("knopOpmaak1");
    let opmaak2 = document.getElementById("knopOpmaak2");
    opmaak1.addEventListener("click", zetOpmaak1);
    opmaak2.addEventListener("click", zetOpmaak2);
}

window.addEventListener("load", handleLoad);