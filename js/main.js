/* Interfy Corporation — main.js */

// Mobile menu toggle
const menuToggle = document.getElementById('mobileMenuToggle');
const headerNav  = document.getElementById('headerNav');

if (menuToggle && headerNav) {
  menuToggle.addEventListener('click', () => {
    const open = headerNav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active', open);
    menuToggle.setAttribute('aria-expanded', open);
  });

  // Close on nav link click
  headerNav.querySelectorAll('.header__nav-item').forEach(link => {
    link.addEventListener('click', () => {
      headerNav.classList.remove('is-open');
      menuToggle.classList.remove('is-active');
      menuToggle.setAttribute('aria-expanded', false);
    });
  });
}

// Active nav link on scroll
const sections = document.querySelectorAll('main section[id], footer[id]');
const navLinks  = document.querySelectorAll('.header__nav-item');
const headerEl  = document.getElementById('header');

function setActiveLink() {
  const scrollY = window.scrollY + (headerEl?.offsetHeight || 80) + 20;
  let current = '';

  sections.forEach(section => {
    if (section.offsetTop <= scrollY) current = section.id;
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('header__nav-item--active', href === current || (current === '' && href === 'inicio'));
  });
}

window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// Header shadow on scroll
window.addEventListener('scroll', () => {
  headerEl?.classList.toggle('header--scrolled', window.scrollY > 10);
}, { passive: true });
