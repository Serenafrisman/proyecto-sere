
//como hacer kla funcion de pasar a una pagina 

function irAInicio() {
    window.location.href = "inicio.html"
}
function irAInicio() {
    window.location.href = "inicio.html"
}
function irAInicio() {
    window.location.href = "inicio.html"
}
function irAInicio() {
    window.location.href = "inicio.html"
}



document.getElementById("h3plantabaja").addEventListener("click", irAInicio)
document.getElementById("h3primerpiso").addEventListener("click", irAInicio)
document.getElementById("h3segundopiso").addEventListener("click", irAInicio)
document.getElementById("h3tercerpiso").addEventListener("click", irAInicio)

//como hacer menu desplegable
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.style.display === 'block') {
    openDropdown.style.display = 'none';
    }
    }
    }
};