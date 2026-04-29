document.addEventListener('DOMContentLoaded', () => {
  // Cursor glow follow
  const glow = document.getElementById('cursor-glow');
  const dot = document.getElementById('cursor-dot');
  if (glow && dot) {
    let mx = 0, my = 0, gx = 0, gy = 0, dx = 0, dy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function animateCursor() {
      gx += (mx - gx) * 0.08;
      gy += (my - gy) * 0.08;
      dx += (mx - dx) * 0.5;
      dy += (my - dy) * 0.5;
      glow.style.left = gx + 'px';
      glow.style.top = gy + 'px';
      dot.style.left = dx + 'px';
      dot.style.top = dy + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();
  }

  // Parallax
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0.5;
    window.addEventListener('scroll', () => {
      const y = window.scrollY * speed;
      el.style.transform = 'translateY(' + (-y) + 'px)';
    });
  });

  // Magnetic buttons
  document.querySelectorAll('[data-magnetic]').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width/2;
      const y = e.clientY - rect.top - rect.height/2;
      el.style.transform = 'translate(' + (x*0.3) + 'px,' + (y*0.3) + 'px)';
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate], .timeline-item, .skill-card').forEach(el => observer.observe(el));

  // Section nav
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = link.dataset.section;
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      const sec = document.getElementById(target);
      if (sec) sec.classList.add('active');
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // mobile menu close
      document.getElementById('navLinks')?.classList.remove('active');
    });
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuToggle');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      document.getElementById('navLinks')?.classList.toggle('active');
    });
  }

  // Back to top
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      backBtn.classList.toggle('visible', window.scrollY > 400);
    });
    backBtn.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
  }

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Canvas hero background
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    
    function resize() {
      w = canvas.width = canvas.parentElement.offsetWidth;
      h = canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.r = Math.random() * 2 + 1;
        this.alpha = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 245, 255, ' + this.alpha + ')';
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    function animateCanvas() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => { p.update(); p.draw(); });
      // draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i+1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(0, 245, 255, ' + (0.15 * (1 - dist/120)) + ')';
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animateCanvas);
    }
    animateCanvas();
  }

  // Preloader
  setTimeout(() => {
    document.getElementById('preloader')?.classList.add('loaded');
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) preloader.style.display = 'none';
    }, 600);
  }, 1800);
});
