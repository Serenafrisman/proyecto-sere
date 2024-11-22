
//como hacer kla funcion de pasar a una pagina 
function irInicio() {
    window.location.href = "inicio.html";
}
function irfavoritos() {
    window.location.href = "favoritos.html";
}

//como hacer menu desplegable
function toggleMenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}
//pasar del menu desplegablee a  los pisos
function irAPlantaBaja() {
    window.location.href = "PB.html";
}
function irAPrimeroPiso() {
    window.location.href = "PRIMER.html";
}

function irASegundoPiso() {
    window.location.href = "SEGUNDO.html";
}

function irATercerPiso() {
    window.location.href = "TERCER.html";
}