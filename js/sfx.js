const playSoundOne = document.getElementById("play-button-2015");
const playSoundTwo = document.getElementById("play-button-2017");
const playSoundThree = document.getElementById("play-button-seacoast");
let isPlaying = true;

const sfxOne = new Audio("./assets/audio/2017.mp3");
const sfxTwo = new Audio("./assets/audio/2017.mp3");
const sfxThree = new Audio("./assets/audio/seacoast.mp3");
console.log(sfxOne);

playSoundOne.addEventListener("click", function() {
    if(isPlaying === true) {
        playSoundOne.innerHTML = `
            <img class="sfx-card-button" src="./assets/icons/pause.png" alt="sfx-card-icon">
        `;
        sfxOne.play();
        isPlaying = false;
    } else if (isPlaying === false) {
        playSoundOne.innerHTML = `
            <img class="sfx-card-button" src="./assets/icons/play.png" alt="sfx-card-icon">
        `;
        sfxOne.pause();
        isPlaying = true;
    }

})


playSoundTwo.addEventListener("click", function() {
    if(isPlaying === true) {
        playSoundTwo.innerHTML = `
            <img class="sfx-card-button" src="./assets/icons/pause.png" alt="sfx-card-icon">
        `;
        sfxTwo.play();
        isPlaying = false;
    } else if (isPlaying === false) {
        playSoundTwo.innerHTML = `
            <img class="sfx-card-button" src="./assets/icons/play.png" alt="sfx-card-icon">
        `;
        sfxTwo.pause();
        isPlaying = true;
    }

})

playSoundThree.addEventListener("click", function() {
    if(isPlaying === true) {
        playSoundThree.innerHTML = `
            <img class="sfx-card-button" src="./assets/icons/pause.png" alt="sfx-card-icon">
        `;
        sfxThree.play();
        isPlaying = false;
    } else if (isPlaying === false) {
        playSoundThree.innerHTML = `
            <img class="sfx-card-button" src="./assets/icons/play.png" alt="sfx-card-icon">
        `;
        sfxThree.pause();
        isPlaying = true;
    }

})


