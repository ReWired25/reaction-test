const startButton = document.querySelector('.start-button');
const centralButton = document.querySelector('.central-button');
const result = document.querySelector('.result');

let firstTime;
let secondTime;
let count = 0;

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
}