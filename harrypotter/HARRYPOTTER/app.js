// funcion para el continuar de la seccion2
function continuar2(){
    document.getElementById("section1").classList.add("display-none")
    document.getElementById("section2").classList.remove("display-none")
} 

// Obtener el elemento de audio
var audio = document.getElementById('audioDeFondo');

// Función para reproducir audio
function reproducirAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}


function continuar3(){
  document.getElementById("section2").classList.add("display-none")
  document.getElementById("section3").classList.remove("display-none")
  document.getElementById("section3-1").classList.remove("display-none")

}
function continuar4() {
  document.getElementById("section3").classList.add("display-none");
  document.getElementById("section4").classList.remove("display-none");
}
// formulario
document.addEventListener('DOMContentLoaded', function () {
  mostrarCampo(0); // Mostrar el primer campo al cargar la página
});

function mostrarCampo(indice) {
  var campos = document.querySelectorAll('.input-group');
  if (indice < campos.length) {
    campos.forEach(function (campo, i) {
      campo.style.display = i === indice ? 'block' : 'none';
    });

    anime({
      targets: campos[indice],
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeInOutQuad',
      complete: function () {
        // Hacer foco en el campo actual después de la animación
        var input = campos[indice].querySelector('.input-magico');
        if (input) {
          input.focus();
        }
      }
    });
  }
}

function siguienteCampo() {
  var campos = document.querySelectorAll('.input-group');
  var indiceActual = Array.from(campos).findIndex(function (campo) {
    return campo.style.display !== 'none';
  });

  // Verificar si el campo actual está lleno antes de pasar al siguiente
  var inputActual = campos[indiceActual].querySelector('.input-magico');
  if (inputActual.checkValidity()) {
    ocultarCampo(indiceActual);
    mostrarCampo(indiceActual + 1);
  } else {
    alert('Por favor, completa el campo antes de continuar.');
  }
}

function ocultarCampo(indice) {
  var campos = document.querySelectorAll('.input-group');
  anime({
    targets: campos[indice],
    opacity: 0,
    translateY: 20,
    duration: 800,
    easing: 'easeInOutQuad'
  });
}
var estudiantes=[]
function enviarFormulario() {
    var edad = document.getElementById('edad').value;
    var familia = document.getElementById('familia').value;
    var cualidades = document.getElementById('cualidades').value;
    var linaje = document.getElementById('linaje').value;
  
    // Almacenar la información en el objeto estudiante
    var estudiante = {
      Edad: edad,
      Familia: familia,
      Cualidades: cualidades,
      Linaje: linaje,
      casa: "",
      animalPatronus: "",
    };
  
    // Asignar la casa
    asigcasasa(estudiante);
  
    // Agregar el estudiante al arreglo
    estudiantes.push(estudiante);
  
    console.log(estudiante);
  }
  
  function asigcasasa(estudiante) {
    var cualidades = estudiante.Cualidades;
    var linaje = estudiante.Linaje;
  
    switch (true) {
      case (cualidades ==="1") && (linaje === "1" || linaje === "2" || linaje === "3"):
        estudiante.casa = "Gryffindor";
        break;
      case (cualidades === "2") && (linaje === "1" || linaje === "2"):
        estudiante.casa = "Hufflepuff";
        break;
    case (cualidades === "3") && (linaje === "1" || linaje === "2" || linaje === "3"):
        estudiante.casa = "Ravenclaw";
        break;
      case (Cualidades === "4") && (linaje === "1"):
        estudiante.casa = "Slytherin";

        break;
      default:
        console.log("No se pudo determinar la casa");
    }
  
    // Puedes agregar más lógica aquí si es necesario
  }

  
  function Mostrarcasa(){
    if (casa== "Gryffindor"){
        var videoElement = document.createElement("video");

// Establecer atributos del video
videoElement.src = "ruta/al/video.mp4"; // Reemplaza con la ruta de tu video
videoElement.controls = true; // Mostrar controles de reproducción
videoElement.width = 640; // Establecer el ancho del video
videoElement.height = 360; // Establecer la altura del video

// Adjuntar el elemento de video al cuerpo del documento
document.body.appendChild(videoElement);
    }
        
  }
  
  // ...



