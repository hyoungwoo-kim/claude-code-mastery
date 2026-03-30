// ==========================================
// 헤더 스크롤 효과
// ==========================================
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// ==========================================
// 모바일 햄버거 메뉴
// ==========================================
const hamburger = document.getElementById('hamburger');
const navbar    = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// 메뉴 항목 클릭 시 닫기
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('open'));
});

// ==========================================
// 활성 네비게이션 링크 (스크롤 위치 기반)
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(l => l.classList.remove('active'));
    const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
    if (active) active.classList.add('active');
  });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));

// ==========================================
// 스크롤 리빌 애니메이션
// ==========================================
const revealTargets = document.querySelectorAll(
  '.glass-card, .skill-card, .project-row, .section-title, .section-label, .about-tags, .hero-stats'
);

revealTargets.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => revealObserver.observe(el));

// ==========================================
// 스킬 바 애니메이션 (CSS 변수 방식)
// ==========================================
const skillFills = document.querySelectorAll('.skill-fill');

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const targetWidth = el.style.getPropertyValue('--w');
    // 초기에 0으로 설정 후 width 트랜지션
    el.style.width = '0';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.width = targetWidth;
      });
    });
    barObserver.unobserve(el);
  });
}, { threshold: 0.5 });

skillFills.forEach(el => {
  el.style.width = '0'; // 초기값 고정
  barObserver.observe(el);
});

// ==========================================
// 문의 폼 제출 처리
// ==========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-check"></i> 전송 완료!';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    btn.style.boxShadow  = '0 4px 16px rgba(34,197,94,0.35)';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML  = original;
      btn.style.background = '';
      btn.style.boxShadow  = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  });
}

// ==========================================
// 부드러운 스크롤 (앵커 링크)
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
