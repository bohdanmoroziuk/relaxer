const container = document.querySelector('.container');
const text = document.querySelector('.text');

const TOTAL_TIME = 7500;
const BREATHE_TIME = (TOTAL_TIME / 5) * 2;
const HOLD_TIME = TOTAL_TIME / 5;

const setInnerHTML = element => content => 
  { element.innerHTML = content; }

const manageClassList = element => config => {
  config.add && element.classList.add(...config.add);
  config.remove && element.classList.remove(...config.remove);
};

const setTextInnerHTML = setInnerHTML(text);
const manageContainerClassList = manageClassList(container);

const breatheAnimation = () => {
  setTextInnerHTML('Breathe In!');

  manageContainerClassList({
    add: ['grow'],
    remove: ['shrink']
  });

  setTimeout(() => {
    setTextInnerHTML('Hold');

    setTimeout(() => {
      setTextInnerHTML('Breathe Out!');

      manageContainerClassList({
        add: ['shrink'],
        remove: ['grow']
      });
    }, HOLD_TIME);
  }, BREATHE_TIME);
};

const run = () => {
  breatheAnimation();
  setInterval(breatheAnimation, TOTAL_TIME);
};

run();