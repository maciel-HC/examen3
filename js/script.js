/* ////////////////////////
      INDEX (CSS)
//////////////////////// */


/* -----------------------
      VARIABLES
----------------------- */

// INPUTS
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var resultado = document.getElementById('resultado');
// BUTTONS
var bSumar = document.getElementById('bSumar');
var bRestar = document.getElementById('bRestar');
var bMultiplicar = document.getElementById('bMultiplicar');
var bDividir = document.getElementById('bDividir');

/* -----------------------
      FUNCIONES
----------------------- */

function sumar(){
  resultado.value = parseInt(num1.value) + parseInt(num2.value);
}
function restar(){
  resultado.value = num1.value - num2.value;
}
function multiplicar(){
  resultado.value = num1.value * num2.value;
}
function dividir(){
  resultado.value = num1.value / num2.value;
}

/* -----------------------
      EVENTOS
----------------------- */
bSumar.addEventListener('click',sumar);
bRestar.addEventListener('click',restar);
bMultiplicar.addEventListener('click',multiplicar);
bDividir.addEventListener('click',dividir);


// CONTROL DE LA BARRA DE NAVEGACIÓN

// VARIABLES
var navBoton = document.getElementById('navBoton');
var navMenu = document.getElementById('navMenu');

// FUNCIONES
function mostrarOcultarNavMenu(){
  navMenu.classList.toggle('navMenu');
}

// EVENTOS
navBoton.addEventListener('click',mostrarOcultarNavMenu);
function mostrar(carpeta){

  let titulo = document.getElementById("titulo");
  let descripcion = document.getElementById("descripcion");
  let imagen = document.getElementById("imagen");

  if(carpeta == "documentos"){

    titulo.innerHTML = "Carpeta Documentos";

    descripcion.innerHTML =
    "Aquí se almacenan tareas, informes y archivos importantes.";

   imagen.src = "img/documentos.png";

  }

  else if(carpeta == "imagenes"){

    titulo.innerHTML = "Carpeta Imágenes";

    descripcion.innerHTML =
    "Contiene fotografías, diseños y recursos multimedia.";

    imagen.src = "img/imagen.avif";

  }

  else if(carpeta == "musica"){

    titulo.innerHTML = "Carpeta Música";

    descripcion.innerHTML =
    "Almacena canciones y archivos de audio organizados.";

    imagen.src = "img/musica.jpg";

  }

  else if(carpeta == "videos"){

    titulo.innerHTML = "Carpeta Videos";

    descripcion.innerHTML =
    "Aquí se guardan películas y contenido audiovisual.";

    imagen.src = "img/video.avif";

  }

}