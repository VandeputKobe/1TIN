// naam: 
function maakGebruiker(naam, nummerplaat){
    return { id: 4, naam: "nieuw", nummerplaat: "nieuw" }
}


window.addEventListener("load", loaded);

function loaded() {

    
}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

