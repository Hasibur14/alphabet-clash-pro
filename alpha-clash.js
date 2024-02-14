function play(){
    //  home screen hidden
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    // play screen show
   const playSection = document.getElementById('play-ground');
   playSection.classList.remove('hidden');

}


// function continueGame() {
//     const alphabet = getARandomAlphabet();


// }

// function play(){
//     hideElementById('home-screen');
//     showElementById('play-ground');
//     continueGame();
// }