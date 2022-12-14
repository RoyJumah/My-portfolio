// Making mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');
  document.body.classList.toggle('hidden');
});

// Smooth scrolling
const alllinks = document.querySelectorAll('a:link');
alllinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scrolling to other links

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
      document.body.style.overflowY = 'visible';
    }

    // close mobile navigation

    if (link.classList.contains('main-nav-desktop')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});
