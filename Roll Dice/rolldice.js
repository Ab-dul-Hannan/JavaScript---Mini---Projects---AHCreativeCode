function rollDice() {

    const noOfDice = document.getElementById('roll').value;
    const result = document.getElementById('result');
    const diceimg = document.getElementById('diceimg');
    const image = document.getElementById('imgd');
    let numroll = [];
    const images = [];

    for (let i = 0; i < noOfDice; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        numroll.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice ${value}" id="imgd" class="imgd">`);
    }
    console.log(numroll);
    console.log(images);

    result.textContent = `Dice: ${numroll.join(', ')}`;
    diceimg.innerHTML = images.join('');

}