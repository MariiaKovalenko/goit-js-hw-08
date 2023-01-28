import throttle from 'lodash/throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
let localObject = { email: ' ', message: ' ' };

const formElem = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

formElem.form.addEventListener('input', throttle(formData, 500));
formElem.form.addEventListener('submit', formSubmit);

initForm();

function formData(e) {
  localObject[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(localObject));
}

function formSubmit(e) {
  e.preventDefault();

  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  console.log(savedData);

  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  localObject = {};
}

function initForm() {
  const persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  if (persistedFilters) {
    localObject = JSON.parse(persistedFilters);
    console.log(localObject);
    formElem.input.value = localObject.email;
    formElem.textarea.value = localObject.message;
  }
}
