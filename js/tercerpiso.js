
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


localStorage.setItem('favoritos', "[]");



 // al hacer clic en el botón, se guarde el título de la página actual y su URL en localStorage
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón por su ID
    alert('DOM loaded');
});


const agregarFavoritos = document.getElementById('agregarFavoritos');


// Añade un evento de clic al botón
agregarFavoritos.addEventListener('click', function() {
    alert("hey")
    
    var url = document.URL; // Obtiene la URL actual
    var title = document.title; // Obtiene el título de la página actual
    var customName = ""; // Nombre personalizado para la página


    localStorage.setItem('favoritePageTitle', title);
    
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    favoritos.push({ name: customName, title: title, url: url });

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert('Página agregada a favoritos: ' + customName);
    mostrarFavoritos(); 
});

// Mostrar los favoritos al cargar la página
mostrarFavoritos();



    
    alert('Página agregada a favoritos: ' + title);


let informacion = JSON.parse(fs.readFileSync("/favoritos.json"))