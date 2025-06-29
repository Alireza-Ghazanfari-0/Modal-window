'use strict';
//definitions
const modalsbutton = document.querySelectorAll('.a-modalbutton');
const modWindow = document.querySelector('.a-modalwin');
const blurWindow = document.querySelector('.bluring');
const clzButton = document.querySelector('.a-close');
const open = function () {
  modWindow.classList.remove('hidden');
  blurWindow.classList.remove('hidden');
};
const close = function () {
  modWindow.classList.add('hidden');
  blurWindow.classList.add('hidden');
};
//codes
for (let i = 0; i < modalsbutton.length; i++) {
  modalsbutton[i].addEventListener('click', open);
}

clzButton.addEventListener('click', close);
blurWindow.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  //  console.log(e.key);
  if (e.key === 'Escape') {
    close();
  }
});
