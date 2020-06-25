const container = document.querySelector('.container');
const text = document.querySelector('.text');

const TOTAL_TIME = 7500;
const BREATHE_TIME = (TOTAL_TIME / 5) * 2;
const HOLD_TIME = TOTAL_TIME / 5;

const breatheAnimation = () => {
  text.innerHTML = 'Breathe In!';

  container.classList.remove('shrink');
  container.classList.add('grow');

  setTimeout(() => {
    text.innerHTML = 'Hold';
    
    setTimeout(() => {
      text.innerHTML = 'Breathe Out!';

      container.classList.remove('grow');
      container.classList.add('shrink');
    }, HOLD_TIME);
  }, BREATHE_TIME);
};

const run = () => {
  breatheAnimation();
  setInterval(breatheAnimation, TOTAL_TIME);
};

run();