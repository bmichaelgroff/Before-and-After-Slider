document.querySelector('[fitr-slider]').innerHTML += '<input data-slider="1" type="range" min="0" max="100" value="50" aria-label="Percentage of before photo shown" class="slider"/>';

const containers = document.querySelectorAll('[fitr-slider]');

containers.forEach(function (container) {
  const slider = container.querySelector('[data-slider]');
  slider.addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`);
  });
});