const mole = document.getElementById('mole');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');

let score = 0;
let gameInterval;
let timerInterval;
let remainingTime = 10; // 제한 시간 (초)

function randomPosition() {
    const container = document.querySelector('.game-container');
    const maxX = container.clientWidth - mole.clientWidth;
    const maxY = container.clientHeight - mole.clientHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    mole.style.left = `${x}px`;
    mole.style.top = `${y}px`;
}

function showMole() {
    mole.style.display = 'block';
    randomPosition();
}

function hideMole() {
    mole.style.display = 'none';
}

function updateTime() {
    timeElement.textContent = remainingTime;
}

function startGame() {
    score = 0;
    remainingTime = 10;
    scoreElement.textContent = score;
    updateTime();

    gameInterval = setInterval(() => {
        showMole();
        setTimeout(hideMole, 500);
    }, 1000);

    timerInterval = setInterval(() => {
        remainingTime -= 1;
        updateTime();
        if (remainingTime <= 0) {
            stopGame();
        }
    }, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    hideMole();
    startButton.disabled = false;
    stopButton.disabled = true;
}

mole.addEventListener('click', () => {
    score += 1;
    scoreElement.textContent = score;
});

startButton.addEventListener('click', () => {
    startGame();
});

stopButton.addEventListener('click', () => {
    stopGame();
});
