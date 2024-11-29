
const inputbox = document.getElementById('inputbox');
const toF = document.getElementById('toF');
const toC = document.getElementById('toC');
const result = document.getElementById('result');
let temp;

function convertTemp() {
    if (toF.checked) {
        temp = Number(inputbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F";
    } else if (toC.checked) {
        temp = Number(inputbox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp + "°C";
    } else {
        result.textContent = "Select a unit.";
    }
}