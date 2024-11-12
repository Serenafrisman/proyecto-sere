
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
function toggleMenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
//pasar del menu desplegablee a  los pisos
function irAPrimeroPiso() {
    window.location.href = "primerpiso.html";
}

function irAPlantaBaja() {
    window.location.href = "plantabaja.html";
}

function irASegundoPiso() {
    window.location.href = "segundopiso.html";
}

function irATercerPiso() {
    window.location.href = "tercerpiso.html";
}