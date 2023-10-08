// 获取所有具有"data-progress"属性的进度条元素
const progressBars = document.querySelectorAll('.progress-bar[data-progress]');

const progressText = document.querySelectorAll('.progress-text-div');

//console.log(window.innerWidth)
// 遍历每个进度条元素，根据"data-progress"属性设置宽度
progressBars.forEach((progressBar, e) => {
    const progressValue = parseInt(progressBar.getAttribute('data-progress'));
    progressBar.style.width = progressValue + '%';
    progressText[e].style.width = progressValue + '%';
    //progressText[e].style.left = progressValue - (window.innerWidth * 0.01) + '%';

});

let ceec_unix = 1705680000000
let ceec_again_unix = 1720713600000

let ceec_day = document.querySelector(".ceec-day").textContent = getLeftTime(ceec_unix).leftDay + " 天" 
let ceec_hour = document.querySelector(".ceec-hour").textContent = getLeftTime(ceec_unix).leftHour + " 小時"

let ceec_again_day = document.querySelector(".ceec-again-day").textContent = getLeftTime(ceec_again_unix).leftDay + " 天"
let ceec_again_hour = document.querySelector(".ceec-again-hour").textContent = getLeftTime(ceec_again_unix).leftHour + " 小時"

console.log(getLeftTime(ceec_unix))

function getLeftTime(unix){
    const time = new Date()
    let timeunix = time.getTime();

    let leftTime = unix - timeunix

    let leftSecond = Math.floor(leftTime/1000)
    let leftHour = leftSecond/60/60
    let leftDay = leftHour/24

    return{
        leftHour : Math.floor(leftHour),
        leftDay : Math.floor(leftDay)
    }
}

function calculateDaysUntilBirthday(birthDate) {

    const currentDate = new Date();

    birthDate.setFullYear(currentDate.getFullYear());

    if (currentDate > birthDate) {
        birthDate.setFullYear(currentDate.getFullYear() + 1);
    }

    const timeDiff = birthDate - currentDate;

    const daysUntilBirthday = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return daysUntilBirthday;
}

// 使用示例
const birthDate = new Date('2005-11-30'); // 替换为你的生日日期，例如 '2023-10-15'
const daysUntilBirthday = calculateDaysUntilBirthday(birthDate);
console.log(`距离生日还有 ${daysUntilBirthday} 天`);

const birthdaySpan = document.querySelector('.birthday_left')
birthdaySpan.textContent = `(距離現在還有 ${daysUntilBirthday} 天)`

document.querySelector(".eighteen-year-old-day").textContent = daysUntilBirthday + " 天"
document.querySelector(".eighteen-year-old-hour").textContent = daysUntilBirthday*24 + " 小時"
//document.querySelector('.18-year-old-day').textContent = daysUntilBirthday

console.log(birthdaySpan)