/* Interfy Corporation — main.js */

// Language selector
(function () {
  const wrap     = document.getElementById('langSelector');
  const btn      = document.getElementById('langBtn');
  const dropdown = document.getElementById('langDropdown');
  const flagImg  = document.getElementById('langFlagImg');
  const label    = document.getElementById('langLabel');

  if (!wrap || !btn || !dropdown) return;

  function open() {
    dropdown.setAttribute('aria-hidden', 'false');
    btn.classList.add('is-open');
  }

  function close() {
    dropdown.setAttribute('aria-hidden', 'true');
    btn.classList.remove('is-open');
  }

  btn.addEventListener('click', () => {
    dropdown.getAttribute('aria-hidden') === 'true' ? open() : close();
  });

  dropdown.querySelectorAll('.header__lang-item').forEach(item => {
    item.addEventListener('click', () => {
      // Update active state
      dropdown.querySelectorAll('.header__lang-item').forEach(i => i.classList.remove('header__lang-item--active'));
      item.classList.add('header__lang-item--active');
      // Update button
      flagImg.src = item.dataset.flag;
      label.textContent = item.dataset.label;
      close();
    });
  });

  document.addEventListener('mousedown', e => {
    if (!wrap.contains(e.target)) close();
  });
})();

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

// Footer accordion (mobile ≤767px)
(function () {
  document.querySelectorAll('.footer__col').forEach(col => {
    const header = col.querySelector('.footer__col-header');
    if (!header) return;

    const chevron = document.createElement('span');
    chevron.className = 'footer__col-chevron';
    chevron.setAttribute('aria-hidden', 'true');
    header.appendChild(chevron);

    const body = document.createElement('div');
    body.className = 'footer__col-body';
    [...col.children].filter(c => c !== header).forEach(c => body.appendChild(c));
    col.appendChild(body);

    header.addEventListener('click', () => {
      if (window.innerWidth > 767) return;
      col.classList.toggle('is-open');
    });
  });
})();

// Header shadow on scroll
window.addEventListener('scroll', () => {
  headerEl?.classList.toggle('header--scrolled', window.scrollY > 10);
}, { passive: true });
