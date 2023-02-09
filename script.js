
const navLinks = document.querySelectorAll('.mobileNavItem');
const hamburgerButton = document.querySelector('#hamburger');
const menuCloseButton = document.querySelector('#menuClose');
const menu = document.querySelector('.slideOutNav');

const closeMenu = () => {
    menu.classList.remove('open');
}

hamburgerButton.addEventListener('click', (e) => {
    menu.classList.add('open');
});
    
menuCloseButton.addEventListener('click', (e) => {
    closeMenu();
});
