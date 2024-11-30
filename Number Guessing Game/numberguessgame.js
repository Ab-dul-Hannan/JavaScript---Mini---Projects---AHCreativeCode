const min = 1;
const max = 100;

// this if you have minimum value of 0 and 1
const random = Math.floor(Math.random() * (max - min + 1));

// This eq is for the higher minimum number eg: 50 as minumum
// const random = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(random);

function guessNumber() {
    const userinput = Number(document.getElementById('usern').value);
    const answer = document.getElementById('answer');

    let count = 0;

    if (isNaN(userinput)) {
        answer.innerHTML = "Please enter a valid number.";
    } else {
        count++; // Increment the count on every valid guess so we can count how many turns it took for the user to guess it right

        if (userinput > random) {
            answer.innerHTML = "Your value is larger than our value.";
        } else if (userinput < random) {
            answer.innerHTML = "Your value is less than our value.";
        } else {
            answer.innerHTML = `You guessed the right value!<br> It took you ${count} turns to guess the right number.`;
        }
    }
}