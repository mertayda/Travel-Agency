const navBar = document.querySelector("nav")
const navItems = document.querySelector(".nav-items")
const hamburgerBtn = document.querySelector(".hamburger-btn")



function navClickFunction(){
    navBar.classList.toggle("active")
}

hamburgerBtn.addEventListener("click",navClickFunction)