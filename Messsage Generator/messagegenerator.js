function msgprint() {
    const message = document.getElementById('message').value;
    const times = Number(document.getElementById('times').value);
    const answer = document.getElementById('answer');

    answer.innerHTML = '';

    if (message == "") {
        answer.textContent = "Please Enter a message.";
    } else if (times <= 0) {
        answer.textContent = "The times must be above than 0.";
    } else {
        for (let i = 0; i < times; i++) {
            answer.innerHTML += message + "<br>";
        }
    }


}

