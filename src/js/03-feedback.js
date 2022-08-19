// import { throttle } from "lodash";

const formFeedBack = document.querySelector('.feedback-form');
console.log('🚀 ~ formEl', formFeedBack);

formFeedBack.addEventListener('submit', onLoginFormSubmit);
formFeedBack.addEventListener('input', onLoginFormInput);
const FEEDBACK_FORM_STATE = '';

function onLoginFormInput(e) {
    e.preventDefault();
    

  localStorage.setItem(FEEDBACK_FORM_STATE, form.elements.message.value);
  updateOutput();
  form.reset();
}

function updateOutput() {
  output.textContent = localStorage.getItem(FEEDBACK_FORM_STATE) || '';
}
// function onLoginFormSubmit(e) {
    //     e.preventDefault();
    
//     const formElements = e.currentTarget.elements;
//     const email = formElements.email.value;
//     const message = formElements.message.value;

//     if (email === '' || message === '') {
//         alert('all fields must be filled')
//     } else {
//         const formData = {
//             email,
//             message,
//         };
//         // feedbackFormState.push(formData);
//         console.log(formData);
//     }
// }

