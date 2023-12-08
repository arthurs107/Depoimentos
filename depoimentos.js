
function abrirPopup() {
    var popup = document.getElementById("popup")
    popup.style.display = "block"
}

window.onload = function () {
    setTimeout(abrirPopup, 5000)
}

function fecharPopup() {
    var popup = document.getElementById("popup")
    popup.style.display = "none"
}
