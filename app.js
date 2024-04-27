const nav_btn = document.querySelector('.nav-key')

nav_btn.addEventListener('click', showNav)

function showNav(){

    // alert('working')

       const navbar = document.querySelector('nav')

       navbar.classList.toggle('.display-nav')


      nav_btn.classList.toggle('.up-btn')
}