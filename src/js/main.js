const maiEl = document.querySelector("main");
const successfulUIEL = document.getElementById("formSubmitted");
const formEl = document.querySelector("form");

import conditionList from "./conditions.data.js";

const conditionContainerEl = document.getElementById("conditions");
//console.log(conditionList);
(function injectConditions() {
    const fragment = document.createDocumentFragment();

    // Looping all condition List
    conditionList.forEach((condition) => {
        const liEl = document.createElement("li");
        liEl.textContent = condition;
        fragment.appendChild(liEl);
    });
    conditionContainerEl.appendChild(fragment);
})();

const validateForm = () => {
    const formInputsEl = formEl.querySelectorAll("input, select, textarea");

    let isFormDirty = true;
    formInputsEl.forEach((field) => {
        if (!field.hasAttribute("required")) {
            field.required = true;
            isFormDirty = false;
        }
    });
    return isFormDirty;
};

const submitForm = (event) => {
    event.preventDefault();
    // do validation here

    if (validateForm()) {
        const formData = new FormData(formEl);
        const recordObj = Object.fromEntries(formData);

        createRecord(recordObj);
        // updated UI Logic
        updateUI();
    }
};

formEl.addEventListener("submit", submitForm);

//UP Date UI

const updateUI = () => {
    maiEl.classList.add("hidden");
    successfulUIEL.classList.remove("hidden");
};