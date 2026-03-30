// ===========================
// HEADER SCROLL EFFECT
// ===========================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ===========================
// MOBILE HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// Close menu when nav link clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
  });
});

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });

sections.forEach(sec => observerNav.observe(sec));

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const revealElements = document.querySelectorAll(
  '.about-inner, .service-item, .skill-card, .project-card, .timeline-item, .contact-inner, .section-title'
);

revealElements.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => revealObserver.observe(el));

// ===========================
// SKILL BAR ANIMATION
// ===========================
const fills = document.querySelectorAll('.fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const width = target.style.width;
      target.style.width = '0';
      setTimeout(() => { target.style.width = width; }, 100);
      barObserver.unobserve(target);
    }
  });
}, { threshold: 0.5 });

fills.forEach(fill => barObserver.observe(fill));

// ===========================
// CONTACT FORM
// ===========================
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = '전송 완료!';
  btn.style.background = '#28a745';
  btn.style.borderColor = '#28a745';
  setTimeout(() => {
    btn.textContent = '메시지 보내기';
    btn.style.background = '';
    btn.style.borderColor = '';
    form.reset();
  }, 3000);
});

// ===========================
// SMOOTH SCROLL (anchor)
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
