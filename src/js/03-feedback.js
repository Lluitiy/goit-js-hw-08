import throttle from 'lodash.throttle';

const formFeedBack = document.querySelector('.feedback-form');
const inputForm = document.querySelector('input');
const messageForm = document.querySelector('textarea');

formFeedBack.addEventListener('input', throttle(onInput, 500));
formFeedBack.addEventListener('submit', onLoginFormSubmit);

const local = {
  email: '',
  message: '',
};



const setItemFunc = () =>
  localStorage.setItem('feedback-form-state', JSON.stringify(local));

function onInput(e) {
  local[e.target.name] = e.target.value;

  setItemFunc();
}
getLocalData();

function getLocalData() {
  const savedLocal = localStorage.getItem('feedback-form-state');
  const parsedLocal = JSON.parse(savedLocal);

  if (parsedLocal.email && parsedLocal.message) {
    inputForm.value = parsedLocal.email;
    messageForm.value = parsedLocal.message;
  }
}

function onLoginFormSubmit(e) {
  e.preventDefault();

  e.target.reset();

  localStorage.removeItem('feedback-form-state');
}
