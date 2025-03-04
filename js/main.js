/**
 * Función para alternar la visibilidad del menú de navegación.
 */
function toggleMenu() {
    // Selecciona el elemento con la clase 'menu-movil'
    let menuMovil = document.querySelector('.navegacion');
    
    // Alterna la clase 'show' en el elemento 'menu-movil'
    menuMovil.classList.toggle('show');
}
