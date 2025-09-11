var navToggler = document.querySelector(".nav-toggler"),
navMenu = document.querySelector(".nav-menu");
navToggler.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggler.classList.toggle('show-icon');
});