
document.addEventListener('DOMContentLoaded', function() {
    const navToggler = document.querySelector('.mobile-nav-toggler');
    const mainMenu = document.querySelector('.main-menu');

    navToggler.addEventListener('click', function() {
        mainMenu.classList.toggle('open');
    });
});

