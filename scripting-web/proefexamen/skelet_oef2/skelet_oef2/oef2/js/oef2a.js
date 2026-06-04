// naam: 

function geefRegistraties(){
    return [
        { id: 1, gebruiker_id : 1, tijd: 1681100000000 },
        { id: 2, gebruiker_id : 1, tijd: 1681200000000 },
        { id: 3, gebruiker_id : 2, tijd: 1691100000000 }                
  ]
}

function geefGebruikers(){
    return [
        { id: 1,  naam: "tim",    nummerplaat: "1-AQK-834" },
        { id: 2,  naam: "sofie",  nummerplaat: "TNA-665" },
        { id: 3,  naam: "tim",    nummerplaat: "0-CPM-771" }
    ]
}


window.addEventListener("load", loaded);

function loaded() {

}

function makeElementEmpty(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
    }
}

