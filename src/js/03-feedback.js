
import throttle from "lodash/throttle";
let selectedElem = {};
const LOCALSTORAGE_KEY = "feedback-form-state";

const formElem = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form  input'),
    textarea: document.querySelector('.feedback-form  textarea'),
};

formElem.form.addEventListener('input', throttle(formData, 500));
formElem.form.addEventListener('submit', formSubmit);

initForm();


function formData(e) {
    selectedElem[e.target.name] = e.target.value.trim();
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(selectedElem));
};

function formSubmit(e) {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log(savedData);

    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
    selectedElem = {};
};

function initForm() {
    const persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
    if (persistedFilters) {
        selectedElem = JSON.parse(persistedFilters);
        console.log(selectedElem);
        formElem.input.value = selectedElem.email;
        formElem.textarea.value = selectedElem.message;
    };
  
};
