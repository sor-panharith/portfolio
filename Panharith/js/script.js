/*=== Menu show Why Hidden ===*/
const navMenu = document.getElementById('nav-menu'),
toggleMenu = document.getElementById('nav-toggle'),
closeMenu = document.getElementById('nav-close')

//show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

//hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

// Remove menu
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))