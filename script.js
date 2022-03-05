const startButton = document.querySelector('.start-button');
const centralButton = document.querySelector('.central-button');
const result = document.querySelector('.result');

const usernameInput = document.querySelector('.username-input');
const cellHead = document.querySelectorAll('.cell-head');
const cellResult = document.querySelectorAll('.cell-result');

let firstTime;
let secondTime;
let count = 0;
let username = '';
let resultArr = [];

usernameInput.addEventListener('keyup', (item) => {
    if (item.keyCode === 13) {
        username = usernameInput.value;
    }
})

function results() {
    resultArr.push(`: ${finalTime}ms`);

    if (resultArr.length > 5) {
        resultArr.shift();
    }
}

startButton.addEventListener('click', () => {
    if (count === 0) {
        centralButton.focus();
        
        let startTime = Math.trunc(Math.random() * 10000);

        if (startTime > 5000) {
            startTime -= 5000;
        }
    
        if (startTime < 1000) {
            startTime += 1000;
        }

        console.log(startTime);

        setTimeout(() => {
            centralButton.classList.add('active');
            firstTime = new Date();
        }, startTime);
    }
    count++;
})

centralButton.addEventListener('click', () => {
    secondTime = new Date();

    if (centralButton.classList.contains('active')) {
        resultTime(firstTime, secondTime);
    }

    centralButton.classList.remove('active');
    count = 0;
})

function resultTime(firstTime, secondTime) {
    let finalTime = secondTime.getTime() - firstTime.getTime();

    result.innerHTML = `Result : ${finalTime}ms`;
    results();
}