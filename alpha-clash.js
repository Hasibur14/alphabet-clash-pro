// function play(){
//     //  home screen hidden
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // play screen show-secund section
//    const playSection = document.getElementById('play-ground');
//    playSection.classList.remove('hidden');

// }

function handleKeyBoardButtonPress(event) {
    const playerPressed = event.key;
    console.log("add press", playerPressed);

    //   get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log("")

    // check match or not
    if (playerPressed === expectedAlphabet) {
        console.log('you got a point');
        //update score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore)

        const newScore = currentScore + 1;

        currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed.you lost a life')
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife -1;

        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyBoardButtonPress)


function continueGame() {
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}



