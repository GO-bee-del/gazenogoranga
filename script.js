const loader = document.getElementById('loader');
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const revealElements = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

revealElements.forEach((element) => revealObserver.observe(element));



function hideLoader() {
  if (!loader) return;
  loader.classList.add('loaded');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 800);
}


window.addEventListener('load', () => {
  if (!window.location.hash) {
    window.location.hash = '#menu';
  }
  hideLoader();
});

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinks?.querySelectorAll('a')?.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 32);
});
