function passwordGenerate() {

    const length = document.getElementById('length').value;
    const capital = document.getElementById('capital');
    const small = document.getElementById('small');
    const numbers = document.getElementById('numbers');
    const symbols = document.getElementById('symbols');
    const result = document.getElementById('result');

    const capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smallLetter = "abcdefghijklmnopqrstuvwxyz";
    const symbol = "!@#$%^&*(){]}[?/|";
    const number = "0123456789";

    let random = "";
    let password = "";

    // Validation Part
    if (length <= 0) {
        result.innerHTML = "The value must be equal or greater than 1.";
    } else if (!capital.checked && !symbols.checked && !numbers.checked && !small.checked) {
        result.innerHTML = "Please check atleast one option.";
    } else {

        // add characters in random according to the user selected options
        if (capital.checked) {
            random += capitalLetter;
        }
        if (small.checked) {
            random += smallLetter;
        }
        if (numbers.checked) {
            random += number;
        }
        if (symbols.checked) {
            random += symbol;
        }

        // we will run the loop throught the random characters slected by the user till user selected length and select random elements
        for (let i = 0; i < length; i++) {
            let indexPass = Math.floor(Math.random() * random.length);
            password += random[indexPass];
        }

        result.innerHTML = `<b>Password is:</b> ${password}`;
    }

}