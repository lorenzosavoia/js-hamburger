//dichiarazioni costanti
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const hamburgerButton = document.querySelector(".hamburger-menu");

//apertura menu
openMenu.addEventListener("click", function () {
    hamburgerButton.style.display = "block";
});

//chiusura menu
closeMenu.addEventListener("click", function () {
    hamburgerButton.style.display = "none";
});