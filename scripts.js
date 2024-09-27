

// Función para crear un bucle horizontal continuo sin cortes usando GSAP
function horizontalLoop(containerSelector, config) {
    const container = document.querySelector(containerSelector);
    const containerWidth = container.scrollWidth;

    // Duplicar todo el contenido del contenedor para crear un loop infinito
    container.appendChild(container.cloneNode(true));

    const loop = gsap.timeline({
        repeat: -1,
        paused: config.paused,
        defaults: { ease: "none" }
    });

    // Anima el contenedor completo basado en el ancho total del contenedor duplicado
    loop.to(container, {
        x: `-=${containerWidth}`,
        duration: containerWidth / (config.speed || 100),
        ease: "none",
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % containerWidth)
        }
    });

    return loop;
}

// Inicializar el bucle y el observador
let loop = horizontalLoop(".cards", { speed: 100 });
let slow = gsap.to(loop, { timeScale: 0, duration: 0.5 });

// Usar Observer para ajustar el timeScale según los eventos del usuario
Observer.create({
    target: ".gallery",
    type: "pointer,touch,wheel",
    wheelSpeed: -1,
    onChange: self => {
        const delta = Math.abs(self.deltaX) > Math.abs(self.deltaY) ? -self.deltaX : -self.deltaY;
        loop.timeScale(delta);
        slow.invalidate().restart();
    }
});

document.querySelectorAll('li').forEach(card => {
    let originalHeight;
    let originalWidth;
    let aspectRatio;

    card.addEventListener('mouseenter', () => {
        // Guardar las dimensiones originales y la relación de aspecto
        originalHeight = card.offsetHeight;
        originalWidth = card.offsetWidth;
        aspectRatio = originalWidth / originalHeight;

        // Expandir la altura al 100% del contenedor UL
        const ul = card.closest('.cards');
        const newHeight = ul.offsetHeight;
        const newWidth = newHeight * aspectRatio;

        // Aplicar un tamaño inicial fijo para asegurar una transición suave
        card.style.height = `${originalHeight}px`;
        card.style.width = `${originalWidth}px`;

        // Retrasar la aplicación del tamaño expandido para asegurar que el DOM procese los cambios
        setTimeout(() => {
            card.style.height = `${newHeight}px`;
            card.style.width = `${newWidth}px`;
            card.classList.add('expanded');
        }, 10); // Pequeño retraso para asegurar la transición suave
    });

    card.addEventListener('mouseleave', () => {
        // Restaurar las dimensiones originales
        card.style.height = `${originalHeight}px`;
        card.style.width = `${originalWidth}px`;

        // Quitar la clase expanded para restaurar estilos originales
        card.classList.remove('expanded');

        // Eliminar estilos inline después de la transición
        setTimeout(() => {
            card.style.height = '';
            card.style.width = '';
        }, 300);
    });
});



