let hamburgerMenu = document.querySelector('.hamburger');
let menuIsActive = () =>{
    hamburgerMenu.classList.toggle('active');
};
hamburgerMenu.addEventListener('click', menuIsActive);

