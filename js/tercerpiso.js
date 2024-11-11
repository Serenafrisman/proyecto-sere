
//como hacer kla funcion de pasar a una pagina 
function irAInicio() {
    window.location.href = "inicio.html"
}
function irfavoritos() {
    window.location.href = "favoritos.html"
}

document.getElementById('Inicio').addEventListener("click", irAInicio)
document.getElementById('Favoritos').addEventListener("click", irfavoritos)

document.getElementById('1er').addEventListener("click", irAInicio)
document.getElementById('2do').addEventListener("click", irAInicio)
document.getElementById('3er').addEventListener("click", irAInicio)

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