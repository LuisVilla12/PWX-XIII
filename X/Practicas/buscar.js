var a = new Array(100);
for (var i = 0; i < a.length; ++i){
    a[i] = 2 * i;
}
function botonPresionado() {
    var valEntrada = document.getElementById("vaEntrada");
    var resultado = document.getElementById("resultado");
    var claveBusqueda = parseInt(valEntrada.value);
    var elemento = a.indexOf(claveBusqueda);
    if (elemento != -1) {
        resultado.innerHTML = "Se encontrĂ³ el valor en el elemento " + elemento;
    }
    else{
        resultado.innerHTML = "No se encontrĂ³ el valor";
    }
}
function iniciar() {
    var botonBuscar = document.getElementById("botonBuscar");
    botonBuscar.addEventListener("click", botonPresionado, false);
}
window.addEventListener("load", iniciar, false);