let letters = document.getElementById('letters');
let timeCountDown = document.getElementById('timelelf');
let guess = document.getElementById('guess');
let createWordButton = document.getElementById('createword');
let checkWordButton = document.getElementById('checkword');
let resultBoard = document.getElementById('result');
let giveUp = document.getElementById('giveup');
let newWord = '';
let timeLeft = 0;
const words = ['apple', 'link', 'philosophy', 'psychology', 'facebook','programming', 'condition', 'features', 'query', 'media',
];



function createWord() {
    letters.innerHTML = '';
    resultBoard.innerHTML = '';
    newWord = words[Math.floor(Math.random()*(words.length))]
    let newWordInArr = newWord.split('');
    newWordInArr.sort(() => Math.random() - 0.5);
    for (let i = 0; i < newWord.length; i++) {
        let letter = document.createElement('div');
        letter.innerText = newWordInArr[i];
        letters.appendChild(letter);
    }
}

const checkword = () => {
    let guessedWord = guess.value;
    let checkResult = '';
    if (guessedWord != newWord) {
        checkResult = "Oh sorry!!! It's wrong!!!";
    }
    else {
        checkResult = "Congrats!!! The word is correct!!!";
    }
    resultBoard.innerText = checkResult;
}

const timer = () => {
    timeLeft = document.getElementById('time').value;
   
    let time = setInterval( function() {
        timeCountDown.innerHTML = timeLeft;
        timeLeft --;
        if (timeLeft < 0) {
            clearInterval(time);
            resultBoard.innerHTML = `Sorry but time is up!`;
        }
    }, 1000)
}
    
 
createWordButton.onclick = (function (e) {
    e.preventDefault();
    timer();
    createWord();
});

checkWordButton.onclick = checkword;

giveUp.onclick = function () {
    resultBoard.innerHTML = `<p> The world is ${newWord} :p</p>`;
}