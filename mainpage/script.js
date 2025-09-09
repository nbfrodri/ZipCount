/**
 * Script principal de la aplicación
 * Maneja la interacción del usuario con el menú móvil y el dropdown de categorías
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del menú móvil
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    
    // Evento para abrir el menú móvil
    hamburgerMenu.addEventListener('click', function() {
        mobileMenuOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    
    // Evento para cerrar el menú móvil
    closeMobileMenu.addEventListener('click', function() {
        mobileMenuOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Elementos del dropdown de categorías móvil
    const categoriesToggle = document.getElementById('categories-toggle');
    const dropdownContent = document.getElementById('categories-dropdown-content');

    // Verificar que los elementos existen antes de agregar eventos
    if (categoriesToggle && dropdownContent) {
        // Evento para toggle del dropdown
        categoriesToggle.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita la propagación del evento al documento
            dropdownContent.classList.toggle('show');
            // Cambia el ícono según el estado
            categoriesToggle.innerHTML = dropdownContent.classList.contains('show') 
                ? 'Categorías ▲' 
                : 'Categorías ▼';
        });

        // Cerrar dropdown al hacer clic fuera
        document.addEventListener('click', function() {
            dropdownContent.classList.remove('show');
            categoriesToggle.innerHTML = 'Categorías ▼';
        });

        // Evitar que el dropdown se cierre al hacer clic dentro
        dropdownContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    // Menú de usuario desktop
const userMenuToggle = document.getElementById('user-menu-toggle');
const userDropdown = document.getElementById('user-dropdown');

if (userMenuToggle && userDropdown) {
    userMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el clic se propague al documento
        userDropdown.classList.toggle('show');
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener('click', function() {
        userDropdown.classList.remove('show');
    });

    // Evitar que el menú se cierre al hacer clic dentro
    userDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Menú de contacto desktop
const contactMenuToggle = document.getElementById('contact-menu-toggle');
const contactDropdown = document.getElementById('contact-dropdown');

if (contactMenuToggle && contactDropdown) {
    contactMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        contactDropdown.classList.toggle('show');
        
        // Cerrar otros dropdowns si están abiertos
        if (userDropdown.classList.contains('show')) {
            userDropdown.classList.remove('show');
        }
    });

    // Cerrar el menú al hacer clic fuera
    document.addEventListener('click', function() {
        contactDropdown.classList.remove('show');
    });

    // Evitar que el menú se cierre al hacer clic dentro
    contactDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Menú de contacto móvil
const mobileContactToggle = document.getElementById('mobile-contact-toggle');
const mobileContactDropdown = document.getElementById('mobile-contact-dropdown');

if (mobileContactToggle && mobileContactDropdown) {
    mobileContactToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileContactDropdown.classList.toggle('show');
        
        // Cerrar otros dropdowns si están abiertos
        if (mobileUserDropdown.classList.contains('show')) {
            mobileUserDropdown.classList.remove('show');
        }
    });
}

// Menú de usuario móvil
const mobileUserToggle = document.getElementById('mobile-user-toggle');
const mobileUserDropdown = document.getElementById('mobile-user-dropdown');

if (mobileUserToggle && mobileUserDropdown) {
    mobileUserToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        mobileUserDropdown.classList.toggle('show');
        
        // Cerrar otros dropdowns si están abiertos
        if (mobileContactDropdown.classList.contains('show')) {
            mobileContactDropdown.classList.remove('show');
        }
    });
}

// Cerrar todos los dropdowns al hacer clic fuera
document.addEventListener('click', function() {
    if (mobileContactDropdown) mobileContactDropdown.classList.remove('show');
    if (mobileUserDropdown) mobileUserDropdown.classList.remove('show');
});

// Evitar que los dropdowns se cierren al hacer clic dentro
if (mobileContactDropdown) {
    mobileContactDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

if (mobileUserDropdown) {
    mobileUserDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Overlay de información del juego
const gameCards = document.querySelectorAll('.game-card');
const gameOverlay = document.getElementById('game-overlay');
const closeOverlay = document.getElementById('close-overlay');
const overlayGameImage = document.getElementById('overlay-game-image');
const overlayGameTitle = document.getElementById('overlay-game-title');
const overlayGameDescription = document.getElementById('overlay-game-description');

// Datos de ejemplo para los juegos
const gameData = { // Objeto que contiene la información de los juegos
    "p5.jpg": {
        title: "Persona 5 Royal",
        description: "Persona 5 Royal es una versión expandida del aclamado JRPG de Atlus. Únete a los Phantom Thieves mientras navegan por la vida escolar y exploran palacios sobrenaturales para cambiar los corazones de los corruptos.",
        platforms: ["PS5", "Nintendo", "PC"],
        price: 59.99,
        discountPrice: 49.99
    },
    "forza.jpg": {
        title: "Forza Horizon 5",
        description: "Forza Horizon 5 te lleva a un viaje por los vibrantes paisajes de México en la aventura Horizon más grande y diversa hasta la fecha.",
        platforms: ["XBOX", "PC"],
        price: 59.99,
        discountPrice: 39.99
    },
    "tlou2.jpeg": {
        title: "The Last of Us Part II",
        description: "The Last of Us Part II es una secuela del aclamado juego de acción y aventura. Sigue la historia de Ellie mientras navega por un mundo devastado por la pandemia y busca venganza.",
        platforms: ["PS4", "PS5"],
        price: 59.99,
        discountPrice: 39.99
    },
    "elden-ring.jpg": {
        title: "Elden Ring",
        description: "Elden Ring es un juego de rol de acción desarrollado por FromSoftware. Explora un mundo abierto lleno de misterios, enemigos desafiantes y una narrativa profunda.",
        platforms: ["PS4", "PS5", "PC"],
        price: 59.99,
        discountPrice: 49.99
    },
    "acs.jpg": {
        title: "Assassin's Creed Syndicate",
        description: "Assassin's Creed Syndicate te lleva a la Londres victoriana, donde juegas como Jacob y Evie Frye, dos asesinos que luchan contra la opresión de los templarios.",
        platforms: ["PS5", "PC"],
        price: 39.99,
        discountPrice: 29.99
    },
    "rdr2.jpeg": {
        title: "Red Dead Redemption 2",
        description: "Red Dead Redemption 2 es un juego de acción y aventura en un mundo abierto. Sigue la historia de Arthur Morgan, un forajido en la América de finales del siglo XIX.",
        platforms: ["PS4", "PS5", "XBOX", "PC"],
        price: 59.99,
        discountPrice: 49.99
    },
    "outlast2.jpg": {
        title: "Outlast 2",
        description: "Outlast 2 es un juego de terror en primera persona que sigue a Blake Langermann, un periodista que investiga el asesinato de una mujer embarazada en una remota comunidad religiosa.",
        platforms: ["PS4", "XBOX", "PC"],
        price: 29.99,
        discountPrice: 19.99
    },
    // Aquí se agregrían más juegos si fuera necesario
};

// Abrir overlay al hacer clic en una tarjeta de juego
gameCards.forEach(card => { // gameCards es una lista que contiene todas las tarjetas de juego
    card.addEventListener('click', function(e) { // e es el evento de clic
        e.stopPropagation(); // asegura que el clic en la tarjeta no active otros eventos en contenedores superiores
        const gameImage = card.querySelector('img'); // Obtener la imagen del juego dentro de la tarjeta
        const gameSrc = gameImage.src.split('/').pop(); // Obtener el nombre del archivo de la imagen (ej. p5.jpg) a partir de la ruta completa de la imagen
        
        // Verificar si tenemos datos para este juego
        if (gameData[gameSrc]) { // gameData es un objeto que contiene la información de los juegos, verificamos si el src de la imagen está en gameData
            const game = gameData[gameSrc]; // Al existir el src en gameData, obtenemos la información del juego y la guardamos en la variable game
            
            // Actualizar el overlay con la información del juego
            overlayGameImage.src = gameImage.src;
            overlayGameTitle.textContent = game.title;
            overlayGameDescription.textContent = game.description;
            
            // Actualizar plataformas
            const platformsContainer = document.querySelector('.game-platforms');
            platformsContainer.innerHTML = ''; // Limpiar plataformas anteriores
            game.platforms.forEach(platform => {
                const platformTag = document.createElement('span'); // Para cada plataforma, creamos un nuevo elemento span
                platformTag.className = 'platform-tag'; // Asignamos la clase platform-tag
                platformTag.textContent = platform; // Asignamos el texto de la plataforma
                platformsContainer.appendChild(platformTag); // Añadimos el nuevo span al contenedor de plataformas
            });
            
            // Actualizar precios
            document.querySelector('.original-price').textContent = `€${game.price.toFixed(2)}`; // .toFixed(2) asegura que el precio tenga dos decimales
            document.querySelector('.discount-price').textContent = `€${game.discountPrice.toFixed(2)}`;
            
            // Mostrar el overlay
            gameOverlay.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Cerrar overlay
closeOverlay.addEventListener('click', function() {
    gameOverlay.style.display = 'none';
    document.body.style.overflow = 'auto'; // Permitir el desplazamiento del cuerpo
});

// Cerrar al hacer clic fuera del contenido
gameOverlay.addEventListener('click', function(e) {
    if (e.target === gameOverlay) {
        gameOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
});