
  // ─── SCROLL REVEAL ───
  const revealEls = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => obs.observe(el));

  // ─── STATS COUNTER ───
  function animateCounter(el, target, suffix) {
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const statsObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const nums = document.querySelectorAll('.stat-num');
        const data = [['200', '+', 200], ['98', '%', 98], ['30', '+', 30], ['6', 'yrs', 6]];
        nums.forEach((el, i) => animateCounter(el, data[i][2], data[i][1]));
        statsObs.disconnect();
      }
    });
  }, { threshold: 0.5 });
  const statsRow = document.querySelector('.stats-row');
  if (statsRow) statsObs.observe(statsRow);

  // ─── NAV SCROLL ───
  const navEl = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    navEl.style.background = window.scrollY > 60
      ? 'rgba(5,8,22,0.95)'
      : 'rgba(5,8,22,0.75)';
  });