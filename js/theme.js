document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', saved);
  updateIcon(saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      // animate transition
      document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateIcon(next);
      // trigger fluid animation
      const fluid = document.querySelector('.fluid-bg');
      if (fluid) {
        fluid.style.animation = 'none';
        setTimeout(() => { fluid.style.animation = ''; }, 10);
      }
    });
  }

  function updateIcon(theme) {
    const iconSun = toggle?.querySelector('.icon-sun');
    const iconMoon = toggle?.querySelector('.icon-moon');
    if (!iconSun || !iconMoon) return;
    if (theme === 'dark') {
      iconSun.style.display = 'block';
      iconMoon.style.display = 'none';
    } else {
      iconSun.style.display = 'none';
      iconMoon.style.display = 'block';
    }
  }
});
