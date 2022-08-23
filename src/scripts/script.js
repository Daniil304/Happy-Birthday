const buttonMen = document.querySelector('.header__button-gender_man');
const buttonWoman = document.querySelector('.header__button-gender_woman');
const body = document.body;

const state = {
    gender: body.classList.contains('woman') ? 'woman' : 'man',
};

const changeToMan = () => {
    if (state.gender !== 'man'){
    body.classList.add('man');
    body.classList.remove('woman');
    state.gender = 'man';
    }
};

const changeToWoman = () => {
    if (state.gender !== 'woman'){
    body.classList.add('woman');
    body.classList.remove('man');
    state.gender = 'woman';
    }
};

buttonMen.addEventListener('click', changeToMan);
buttonWoman.addEventListener('click', changeToWoman);
