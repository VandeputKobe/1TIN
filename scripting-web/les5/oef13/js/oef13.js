function handleLoad(){
    let go = document.getElementById("go");
    go.addEventListener("click", spilts)
}

function spilts(){
    let zin = document.getElementById("zin").value;
    let filter = document.getElementById("filter").value;

    let result = zin.split(" ")
    for (let i = 1; i < result.length; i++) {
        if (result[i].includes(filter)) {
            break
        }
        else{
            
        }
    }

}