import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import restaurants from '../DATA.json';

// const json = require('../DATA.json');

console.log('Hello Coders! :)');

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar-menu');
const backgroundNavbar = document.querySelector('.background-navbar');
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

const onScroll = () => {
  const scroll = document.documentElement.scrollTop;

  if (scroll > 0) {
    backgroundNavbar.classList.add('scrolled');
  } else {
    backgroundNavbar.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', onScroll);

restaurants.restaurants.forEach((restoran) => {
  const article = document.createElement('article');

  const image = document.createElement('img');
  image.src = restoran.pictureId;
  image.alt = restoran.name;
  article.appendChild(image);

  const rating = document.createElement('p');

  const star = document.createElement('span');
  star.className = 'fa fa-star checked';

  rating.appendChild(star);

  rating.innerHTML += ` ${restoran.rating}`;

  article.appendChild(rating);

  const text = document.createElement('div');
  text.className = 'text';

  const nama = document.createElement('h2');
  nama.innerHTML = restoran.name;
  text.appendChild(nama);

  const kota = document.createElement('p');
  kota.innerHTML = restoran.city;
  kota.className = 'kota';
  text.appendChild(kota);

  const deskripsi = document.createElement('p');
  deskripsi.innerHTML = restoran.description;
  deskripsi.className = 'deskripsi';
  text.appendChild(deskripsi);

  article.appendChild(text);

  document.getElementById('restoran').appendChild(article);
});
