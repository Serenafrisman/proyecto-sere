
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


  // Obtiene el campo de texto que vamos a monitorear
  var field = document.getElementById("aula");

  // Verifica si tenemos algún valor auto guardado
  if (sessionStorage.getItem("autosave")) {
      field.value = sessionStorage.getItem("autosave");
  }

  // Escucha el evento "submit" del formulario
  document.getElementById("buscarAulaForm").addEventListener("click", function (event) {
    console.log("daskjdjas")
      event.preventDefault(); // Evita el comportamiento por defecto de enviar el formulario

      var aula = field.value; // Captura el valor ingresado
      if (aula) {
        console.log(aula[1])
        switch (aula[1]) {
            case "0":
                window.location.href = "plantabaja.html";
                break;
            case "1": 
            window.location.href = "primerpiso.html";
            break;
            case "2":
                window.location.href = "segundopiso.html";
                break;
                case "3":
                    window.location.href = "tercerpiso.html";
                    break
            default:
                break;
        }
          sessionStorage.setItem("autosave", aula); // Guarda el aula en sessionStorage
           // Redirige a la página de resultado
      } else {
          alert("Por favor, ingresa un número de aula."); // Valida que el campo no esté vacío
      }
  });