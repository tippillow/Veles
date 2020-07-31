const closeButton = document.querySelector('.header__close');
const burgerButton = document.querySelector('.header__burger');
const navigation = document.querySelector('.header__navigation');
const intro = document.querySelector('.header__intro');
const header = document.querySelector('.header');

function onCloseButtonClick() {
    navigation.classList.add('close');
    intro.classList.remove('close');
    intro.style.background = 'none';
    closeButton.classList.add('close');
    burgerButton.classList.remove('close');
    header.classList.remove('black')
}

function onBurgerButtonClick() {
    navigation.classList.remove('close');
    intro.classList.add('close');
    intro.style.background = '#161616;';
    closeButton.classList.remove('close');
    burgerButton.classList.add('close');
    header.classList.add('black')
}

closeButton.addEventListener('click', onCloseButtonClick);
burgerButton.addEventListener('click', onBurgerButtonClick);