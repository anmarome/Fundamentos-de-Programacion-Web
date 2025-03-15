//funcion se activa cuando el evento onchange pasa en el dropdown.
function navigateToURL() {
    const selectElement = document.getElementById('urlSelect');
    const selectedURL = selectElement.value;

    if (selectedURL) {
        window.open(selectedURL, '_blank'); // abre la url ligada en el html en una nueva pestanha
    }
}


//funcion del boton reiniciar
document.getElementById("btn-clean").onclick = function() {
    //dejar el select con el texto por defecto
    document.getElementById("urlSelect").value = "";
}