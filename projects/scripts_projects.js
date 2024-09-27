document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--link");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };




    
// Obtener todos los elementos de imagen dentro de prj-gallery
const images = Array.from(document.querySelectorAll('.prj-img'));
let currentIndex = 0;

// Mostrar la primera imagen al cargar
images[currentIndex].style.display = 'flex';
images[currentIndex].style.opacity = '1';
images[currentIndex].style.transition = 'opacity 0.5s ease'; // Transición de opacidad

const navLeft = document.querySelector('.nav-left');
const navRight = document.querySelector('.nav-right');

// Función para ocultar la imagen actual con transición
function hideImage(index) {
    images[index].style.opacity = '0'; // Cambia la opacidad a 0 para hacer la transición
    setTimeout(() => {
        images[index].style.display = 'none'; // Solo ocultar después de la transición
    }, 500); // Debe coincidir con la duración de la transición (0.5s)
}

// Función para mostrar la imagen con transición
function showImage(index) {
    images[index].style.display = 'flex'; // Mostrar la nueva imagen
    setTimeout(() => {
        images[index].style.opacity = '1'; // Cambiar opacidad a 1 después de mostrar
        images[index].style.transition = 'opacity 0.5s ease'; // Asegurar transición aplicada
    }, 10); // Pequeño retardo para que el navegador procese el cambio de display
}

// Manejar clics en el botón izquierdo
navLeft.addEventListener('click', () => {
    hideImage(currentIndex); // Ocultar imagen actual
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Navegar a la imagen anterior
    showImage(currentIndex); // Mostrar nueva imagen
});

// Manejar clics en el botón derecho
navRight.addEventListener('click', () => {
    hideImage(currentIndex); // Ocultar imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Navegar a la imagen siguiente
    showImage(currentIndex); // Mostrar nueva imagen
});





  });
  window.onload = function() {



    // Seleccionamos el div con la clase 'cristal-left'
    const infoSice = document.querySelector('.info');

    // Verificamos si el div fue encontrado
    if (!infoSice) {
        console.error('No se encontró el div .info');
        return;
    }

    // Creamos un nuevo ResizeObserver para monitorear los cambios de tamaño
    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;
            console.log(`INFO Ancho: ${width}px, Alto: ${height}px`);
        }
    });

  
    // Comenzamos a observar el tamaño del div 'cristal-right
    resizeObserver.observe(infoSice);
  };

  document.addEventListener("DOMContentLoaded", function() {
    // Oculta inicialmente la información
    $(".contenido-info").hide();
  
    var botInfo = document.querySelector(".bot-info");
    var Info = document.querySelector(".info");
    var textoPr = $(".texto-pr");
  
    botInfo.addEventListener("click", function() {
      // Cambia el ancho del div `info` aplicando la clase 'expanded'
      Info.classList.toggle("expanded"); // Alterna la clase 'expanded' para cambiar el ancho
  
      // Primero cambia la opacidad de .texto-pr a 0%
      textoPr.css("opacity", "0%");
  
      // Realiza el resto de las acciones después de un pequeño retraso
      setTimeout(function() {
        $(".contenido-info").slideToggle("slow", function() {
          var currentText = botInfo.textContent.trim();
  
          if (currentText === "[PROJECT_INFO]+") {
            botInfo.textContent = "[X]";
            botInfo.classList.add("expanded"); // Añade la clase 'expanded' para estilos específicos
            textoPr.css("opacity", "100%"); // Restaura la opacidad
          } else {
            botInfo.textContent = "[PROJECT_INFO]+";
            botInfo.classList.remove("expanded"); // Elimina la clase 'expanded'
            textoPr.css("opacity", "0%"); // Asegúrate de que esté en 0%
          }
        });
      }, 300); // Retardo en milisegundos (ajusta según sea necesario)
    });
  });
  

if (window.matchMedia("(max-width: 767px) and (pointer: coarse)").matches) {
  console.log("Estamos en un dispositivo móvil pequeño.");
} else if (window.matchMedia("(max-width: 767px)").matches) {
  console.log("Estamos en una pantalla pequeña, pero no necesariamente en un móvil.");
} else {
  console.log("Estamos en un dispositivo de escritorio o en una pantalla grande.");
}


document.addEventListener("DOMContentLoaded", function() {
  // Oculta inicialmente la información
  $(".prj-conte").hide();

  var botOther = document.querySelector(".bot-other");
    var otherPrj = document.querySelector(".other-prj");
    var prjTab = $(".prj-tab");
  
    botOther.addEventListener("click", function() {
      // Cambia el ancho del div `info` aplicando la clase 'expanded'
      otherPrj.classList.toggle("expanded"); // Alterna la clase 'expanded' para cambiar el ancho
  
      // Primero cambia la opacidad de .texto-pr a 0%
      prjTab.css("opacity", "0%");
  
      // Realiza el resto de las acciones después de un pequeño retraso
      setTimeout(function() {
        $(".prj-conte").slideToggle("slow", function() {
          var currentText2 = botOther.textContent.trim();
  
          if (currentText2 === "[OTHER_PROJECTS]") {
            botOther.textContent = "[X]";
            botOther.classList.add("expanded"); // Añade la clase 'expanded' para estilos específicos
            prjTab.css("opacity", "100%"); // Restaura la opacidad
          } else {
            botOther.textContent = "[OTHER_PROJECTS]";
            botOther.classList.remove("expanded"); // Elimina la clase 'expanded'
            prjTab.css("opacity", "0%"); // Asegúrate de que esté en 0%
          }
        });
      }, 300); // Retardo en milisegundos (ajusta según sea necesario)
    });
});



document.addEventListener("DOMContentLoaded", function() {
  // Obtener todos los elementos de imagen dentro de prj-gallery
  const images = Array.from(document.querySelectorAll('.prj-img'));
  const totalImages = images.length; // Número total de imágenes
  let currentIndex = 0;

  // Seleccionar los contenedores para el número total y actual de imágenes
  const fotoTotal = document.querySelector('.foto-total');
  const fotoAct = document.querySelector('.foto-act');

  // Mostrar el número total de imágenes
  if (fotoTotal) {
    fotoTotal.textContent = totalImages;
  }

  // Mostrar la imagen actual (inicialmente será la primera)
  if (fotoAct) {
    fotoAct.textContent = currentIndex + 1;
  }

  // Actualizar el número de la imagen actual cuando se cambia
  function updateImageCounter() {
    if (fotoAct) {
      fotoAct.textContent = currentIndex + 1; // Muestra el número de la imagen actual
    }
  }

  // Adaptar la función de navegación izquierda
  const navLeft = document.querySelector('.nav-left');
  navLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Mover a la imagen anterior
    updateImageCounter(); // Actualizar el contador
  });

  // Adaptar la función de navegación derecha
  const navRight = document.querySelector('.nav-right');
  navRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages; // Mover a la imagen siguiente
    updateImageCounter(); // Actualizar el contador
  });
});
