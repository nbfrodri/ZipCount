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
});