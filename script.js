const loader = document.getElementById("loader")
const navbar = document.getElementById('navbar')
const menuToggle = document.getElementById('navbarSupportedContent')
const navbarTogglerIcon = document.getElementById('navbar-toggler-icon')
const backToTopButton = document.getElementById('back-to-top-button')

//Loading screen transition
function showPage() {
  loader.classList.remove('d-flex')
  loader.classList.add('d-none')
}
function loadFunction() {
  setTimeout(showPage, 1500)
}

/*
When the user scrolls down from the top of the document,
change navbar color and show back-to-top button
*/
window.addEventListener('scroll', function() {
  if (menuToggle.classList.contains('show') === false) {
    navbar.classList.remove('hideNavbar', window.pageYOffset > 0)
    navbarTogglerIcon.classList.remove('rotate')
  }
  if (window.pageYOffset === 0) {
    backToTopButton.classList.add('d-none')
    navbar.classList.add ('hideNavbar')
  } else {
    backToTopButton.classList.remove('d-none')
    navbar.classList.remove('hideNavbar')
  }
})

/*
When the user is at the top of document,
navbar button will change menu color when expanded
*/
function colorChangeFunction() {
  if (window.pageYOffset === 0) {
    if (navbar.classList.contains('hideNavbar') === false) {
      navbar.classList.add ('hideNavbar')
    } else if (navbar.classList.contains('hideNavbar') === true) {
      navbar.classList.remove('hideNavbar')
    }
  }
}

// When the user clicks on any items in navbar or learn-more button, close the menu
function closeFunction() {
  menuToggle.classList.remove('show')
  navbarTogglerIcon.classList.remove('rotate')
  if (window.pageYOffset === 0) {
    navbar.classList.add('hideNavbar')
  }
}

// animation of navbar button
function rotateFunction() {
  navbarTogglerIcon.classList.toggle('rotate')
}

// When the user clicks the back-to-top buttion, reset navbar button
function topFunction() {
  menuToggle.classList.remove('show')
  navbarTogglerIcon.classList.remove('rotate')
}

// Self executing function
loader.classList.remove('d-none')
loader.classList.add('d-flex')
if (window.pageYOffset === 0) {
  backToTopButton.classList.add('d-none')
  navbar.classList.add ('hideNavbar')
}