const toggleMenu = document.querySelector(".toggle__menu"); //manipulating the toggle menu
const headerNav = document.querySelector(".header__nav");   

toggleMenu.addEventListener("click", () =>{
    toggleMenu.classList.toggle("open");
    headerNav.classList.toggle("open");
});

