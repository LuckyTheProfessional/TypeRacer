const timeLeftHtml = document.querySelector('.time');
const scoreHtml = document.querySelector('.score');
const wordHtml = document.querySelector('.word');
const typeForm = document.querySelector('.inputBox');
const gameEndBox = document.querySelector('.gameEndBox');
const difficultyBox = document.querySelector('.chooseInBox');

const words = ['wizard', 'harry', 'potter', 'ball', 'egg', 'hand', 'professional', 'leon', 'morgan', 'nightmare', 'movie', 'programming', 'coding', 'javascript', 'three', 'seconds', 'paper', 'bag', 'bottle', 'rolling', 'frustration', 'help', 'unbelievable', 'crean', 'science', 'project', 'word', 'money', 'glass', 'house', 'mouse', 'progress', 'medium', 'dependent', 'juice'];
let difficulty = difficultyBox.difficulty.value;
let word = words[Math.round(Math.random(0) * (words.length - 1))];
let score = 0;
let time = 10;

scoreHtml.innerHTML = `
    <p class="score">Score: ${0}</p>
`

wordHtml.innerHTML = `
    <p class="word">${word}</p>
`

setInterval(() => {
    time--
    timeLeftHtml.innerHTML = `
        <p class="time">Time left: ${time}s</p>
    `
    if (time === 0 ) {
        gameEndBox.innerHTML = `
            <p class="endTitle">Time Run Out</p>
            <p class="finalScore">Your final score is ${score}</p>
            <form id="reload">
                <button class="buttonReload">Try again</button>
            </form>
        `
        gameEndBox.classList.add('show');
    }
}, 1000)

typeForm.addEventListener('keyup', () => {
    const wordInput = typeForm.inputWord.value.trim().toLowerCase();
    difficulty = difficultyBox.difficulty.value;

    console.log(difficulty);
    if (wordInput === word) {
        score ++
        word = words[Math.round(Math.random(0) * (words.length - 1))];
        wordHtml.innerHTML = `
            <p class="word">${word}</p>
        `
        scoreHtml.innerHTML = `
         <p class="score">Score: ${score}</p>
        `
        
        if (difficulty === 'easy') {
            time += 5;
        }else if (difficulty === 'hard') {
            time += 1;
        }else if (difficulty === 'medium') {
            time += 4;
        }

        typeForm.reset()
    }
})