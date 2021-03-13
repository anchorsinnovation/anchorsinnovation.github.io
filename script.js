const navbar = document.getElementById('navbar')
const menuToggle = document.getElementById('navbarSupportedContent')
const navbarTogglerIcon = document.getElementById('navbar-toggler-icon')
const backToTopButton = document.getElementById('back-to-top-button')

/*
When the user scrolls down from the top of the document,
change navbar color and show back-to-top button
*/
window.addEventListener('scroll', function() {
  if (menuToggle.classList.contains('show') === false) {
    navbar.classList.toggle('showNavbar', window.pageYOffset > 0)
    navbarTogglerIcon.classList.remove('rotate')
  }
  backToTopButton.classList.toggle('pageScrolled', window.pageYOffset > 0)
})

/*
When the user is at the top of document,
navbar button will change menu color when expanded
*/
function colorChangeFunction() {
  if (window.pageYOffset === 0) {
    if (navbar.classList.contains('showNavbar') === false) {
      navbar.classList.add ('showNavbar')
    } else if (navbar.classList.contains('showNavbar') === true) {
      navbar.classList.remove('showNavbar')
    }
  }
}

// When the user clicks on any items in navbar or learn-more button, close the menu
function closeFunction() {
  menuToggle.classList.remove('show')
  navbarTogglerIcon.classList.remove('rotate')
  if (window.pageYOffset === 0) {
    navbar.classList.remove('showNavbar')
  }
}

// When the user clicks on the button, scroll to the top of the document
function rotateFunction() {
  navbarTogglerIcon.classList.toggle('rotate')
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  menuToggle.classList.remove('show')
  navbarTogglerIcon.classList.remove('rotate')
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}