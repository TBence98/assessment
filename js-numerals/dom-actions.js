import numbersToLetters from "./numbers-to-letters.js";
import { convertToBritishEnglish } from "./numbers-to-letters.js";

const form = document.querySelector(".converter-form");
const isBritishCheckBox = document.getElementById("isBritish");

const submitHandler = (event) => {
    event.preventDefault();
    const resultEl = document.getElementById("result");
    const numberEl = document.getElementById("number-input");
    const numberToConvert = +numberEl.value;

    try {
        if (
            isBritishCheckBox.checked &&
            numberToConvert > 1000 &&
            numberToConvert < 2000
        ) {
            resultEl.innerText = convertToBritishEnglish(numberToConvert);
        } else {
            resultEl.innerText = numbersToLetters(numberToConvert);
        }
    } catch (e) {
        resultEl.innerText = e.message;
    }
};

form.addEventListener("submit", submitHandler);
