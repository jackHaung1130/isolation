let welcome_array = [
    '無心插柳柳橙汁，一個晚上想寫程式，這裡就誕生了🌆', 
    '好像很酷是吧。是阿，真的蠻酷的💫',
    '👋嗨你好，什麼風把你吹到這了？✨'

]

let ceec_unix = 1705680000000
let ceec_again_unix = 1720713600000

let header_text = document.getElementById('header-title');

header_text.textContent = welcome_array[Math.floor(Math.random()*welcome_array.length)]

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
