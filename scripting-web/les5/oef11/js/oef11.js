function handleChange() {
    let font = document.getElementById("select_lettertype").value;
    let size = document.getElementById("select_fontsize").value;

    let tekst = document.getElementById("p_voorbeeld");
    tekst.style.fontFamily = font;
    tekst.style.fontSize = size;
}

function handleLoad(){
    let selectFontsize = document.getElementById("select_fontsize");
    let select_lettertype = document.getElementById("select_lettertype");
    selectFontsize.addEventListener("change", handleChange);
    select_lettertype.addEventListener("change", handleChange);
}

window.addEventListener("load", handleLoad);