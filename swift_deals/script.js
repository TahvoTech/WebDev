document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.querySelector('body');

    menuToggle.addEventListener('click', function() {
        body.classList.toggle('show-nav');
    });
});