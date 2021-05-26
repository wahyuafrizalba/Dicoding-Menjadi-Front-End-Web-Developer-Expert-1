import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

console.log('Hello Coders! :)');

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-menu');
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.navbar-link');

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navbar.classList.toggle('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  navbar.classList.remove('active');
}

hamburger.addEventListener('click', mobileMenu);

hamburger.addEventListener('keydown', (event) => {
  if (event.code === 'Space' || event.code === 'Enter') {
    hamburger.click();
  }
});

navLink.forEach((n) => n.addEventListener('click', closeMenu));
