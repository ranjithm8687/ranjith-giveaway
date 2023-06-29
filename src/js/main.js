const maiEl = document.querySelector("main");
const successfulUIEL = document.getElementById("formSubmitted");
const formEl = document.querySelector("form");

const submitForm = (event) => {
    event.preventDefault();
    // console.log("Submited", event);

    const formData = new FormData(formEl);

    console.log([...formData.entries()]);
    console.log([...formData.values()]);
    // updated UI Logic
    // updateUI();
};

formEl.addEventListener("submit", submitForm);

//UP Date UI

const updateUI = () => {
    maiEl.classList.add("hidden");
    successfulUIEL.classList.remove("hidden");
};