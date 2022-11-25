import numbersToLetters from "./numbers-to-letters.js";

const form = document.querySelector(".converter-form");

const submitHandler = (event) => {
    event.preventDefault();
    const numberEl = document.getElementById("number-input");
    const resultEl = document.getElementById("result");
    const numberToConvert = +numberEl.value;

    try {
        resultEl.innerText = numbersToLetters(numberToConvert);
    } catch (e) {
        resultEl.innerText = e.message;
    }
};

form.addEventListener("submit", submitHandler);
