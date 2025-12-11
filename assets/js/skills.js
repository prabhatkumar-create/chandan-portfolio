// Animation script (intersection observer)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const percent = parseInt(card.getAttribute('data-skill-percent') || '0', 10);
          const bar = card.querySelector('.bar');
          const percentLabel = card.querySelector('.percent');

          // set width with small delay for stagger
          setTimeout(() => {
            bar.style.width = percent + '%';
            bar.classList.add('glow');
          }, 80);

          // animate number
          const duration = 900; const stepTime = 16; const steps = Math.ceil(duration / stepTime);
          let current = 0; const inc = percent / steps;
          const numInterval = setInterval(() => {
            current += inc;
            if (current >= percent) { percentLabel.textContent = percent + '%'; clearInterval(numInterval); }
            else percentLabel.textContent = Math.round(current) + '%';
          }, stepTime);

          observer.unobserve(card);
        }
      });
    }, { threshold: 0.25 });

    document.querySelectorAll('.skill-card').forEach((c, i) => {
      // stagger the observation slightly for nicer entrance
      setTimeout(() => observer.observe(c), i * 60);

      // keyboard focus glow
      c.addEventListener('focus', () => c.classList.add('glow'));
      c.addEventListener('blur', () => c.classList.remove('glow'));
    });