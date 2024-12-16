// Al cargar la página, mostramos los favoritos guardados en localStorage
window.onload = function() {
    cargarFavoritos();
};

// Función para cargar las aulas favoritas desde localStorage y mostrarlas en el menú desplegable
function cargarFavoritos() {
    const selectFavoritos = document.getElementById('menu-favoritos');
    selectFavoritos.innerHTML = '<option value="">Selecciona un aula favorita</option>'; // Limpiar menú

    // Obtener las aulas favoritas del localStorage
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Agregar cada aula favorita como una opción en el menú desplegable
    favoritos.forEach(favorito => {
        const option = document.createElement('option');
        option.value = favorito;
        option.textContent = favorito;
        selectFavoritos.appendChild(option);
    });

    // Llamar a mostrarPiso() cuando se selecciona una opción en el menú
    selectFavoritos.addEventListener('change', function() {
        const aulaSeleccionada = selectFavoritos.value;
        if (aulaSeleccionada) {
            // Establecer el valor del input 'aula' para que mostrarPiso() lo recoja correctamente
            document.getElementById('menu-favoritos').value = aulaSeleccionada;
            mostrarPiso(); // Llama a mostrarPiso para mostrar el piso y plano
        }
    });
}


function mostrarPiso() {
    const aula = document.getElementById('menu-favoritos').value;
    let piso;
    let imagen;


    switch (aula) {
        case 'L001':
        case 'L002':
        case 'Ofc. asistentes':

        case 'Admisión':
        case 'L004':
        case 'L006':
        case 'L007':
        case 'L008':
        case 'Coord. Cs. Sociales':
        case 'Coord. Ed. Judía':
        case 'Ofc. asistentes':
        case 'L009':
        case 'L010':
        case 'Baños':
        case 'Templo':
        case 'L011':
        case 'Aula de robótica educ.':
        case 'Ofc. inglés':
        case 'Lab. campus':
        case 'L014':
        case 'Comedor alumnos':
        case 'DAT':
        case 'Cancha':
        piso = '0 (planta baja)';
        imagen = 'images/plano_piso0.jpg';
        break;
        case 'Lab. humanidades':
        case 'Ofc. humanidades':
        case 'L101':
        case 'L102':
        case 'L103':
        case 'L104':
        case 'L105':
        case 'L106':
        case 'L107':
        case 'L108':
        case 'L109':
        case 'Dirección de estudios y pedagogía':
        case 'Sala de docentes 2.0':
        case 'L111':
        case 'Dirección educativa del nivel medio':
        case 'L112':
        case 'L113':
        case 'L114':
        case 'L115':
        case 'Ofc. asistentes 1° año':
        case 'Baños prof.':
        case 'Coordinación operativa':
        case 'Baños hombres':
        case 'Baños disc.':
        case 'L116':
        case 'Coord. 1° año':
        case 'L117':
        case 'L118':
        case 'L119':
        case 'L120':
        case 'L121':
        piso = '1';
        imagen = 'images/plano_piso1.jpg';
        break;
        case 'L5':
        case 'Ofc.':
        case 'L200':
        case 'L201':
        case 'L202':
        case 'L203':
        case 'L204':
        case 'L205':
        case 'L206':
        case 'L207':
        case 'L208':
        case 'Ofc.':
        case 'Ofc.':
        case 'Sala prof.':
        case 'L1':
        case 'L2':
        case 'L3':
        case 'L4':
        case 'L5':
        case 'Pañol TIC':
        case 'L213':
        case 'Ofc.':
        case 'Baño mixto':
        case 'L214':
        case 'L215':
        case 'L216':
        case 'L217':
        piso = '2';
        imagen = 'images/plano_piso2.jpg';
        break;
        case 'Secretaría docente':
        case 'Ofc. de alumnos':
        case 'L300':
        case 'L301':
        case 'L302':
        case 'L303':
        case 'L304':
        case 'L305':
        case 'L306':
        case 'L307':
        case 'L308':
        case 'Baños':
        case 'Ofc. asistentes':
        case 'Lab.':
        case 'L309':
        case 'L310':
        case 'Ofc. asistentes':
        case 'L311':
        case 'L312':
        case 'Radio':
        case 'L313':
        case 'L314':
        case 'Pañol medios':
        case 'Ofc. medios':
        case 'Control TV':
        case 'Estudio TV':
        piso = '3';
        imagen = 'images/plano_piso3.jpg';
        break;
        default:
        piso = "este piso no existe";
        imagen = null;
        break;
        }        

    const resultadoDiv = document.getElementById('resultado');
    const planoImg = document.getElementById('plano');
    if (piso && imagen) {
        resultadoDiv.innerHTML = `<p>El aula ${aula} está en el piso ${piso}.</p>`;
        planoImg.src = imagen;
        planoImg.style.display = 'block';
    } else {
        resultadoDiv.innerHTML = `<p>Aula no encontrada. Por favor ingrese un número de aula válido.</p>`;
        planoImg.style.display = 'none';
    }
}
//____________________________________________________________________



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

//__________________________________________________________________________
// Selecciona el elemento <select>
const contenedor = document.querySelector(".container");

  let favoritos = [
    { "favorito": "L300", "piso": "Tercero" },
    { "favorito": "L200", "piso": "Segundo" },
    { "favorito": "L100", "piso": "Primero" },
    { "favorito": "L000", "piso": "PB" },
  ];

  function mostrarFavoritos() {
    console.log("Mostrando favoritos..."); // Verifica si la función se ejecuta
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de mostrar los favoritos

    favoritos.forEach(item => {
      // Crear un div para cada favorito
      const favoritodiv = document.createElement("div");
      favoritodiv.classList.add('favorito');

      // Agregar información del favorito
      favoritodiv.innerHTML = `
        <h2>${item.favorito}</h2>
        <p>Piso: ${item.piso}</p>
      `;

      // Añadir el div al contenedor
      contenedor.appendChild(favoritodiv);
    });
  }

  // Llama a la función para mostrar los favoritos
  mostrarFavoritos();

