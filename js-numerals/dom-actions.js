import numbersToLetters from "./numbers-to-letters.js";

const form = document.querySelector(".converter-form");

const submitHandler = (event) => {
    event.preventDefault();
    const numberEl = document.getElementById("number-input");
    const resultEl = document.getElementById("result");
    const numberToConvert = +numberEl.value;
    // Very basic validation, should be improved later
    if (numberToConvert) {
        resultEl.innerText = numbersToLetters(numberToConvert);
    } else {
        resultEl.innerText = "Input should only contain numbers";
    }
};

form.addEventListener("submit", submitHandler);
