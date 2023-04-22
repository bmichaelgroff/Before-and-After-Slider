const containers = document.querySelectorAll('[fitr-slider]');

containers.forEach(function (container) {
  const slider = container.querySelector('[data-slider]');
  slider.addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
  });
});