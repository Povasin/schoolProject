// Таймер
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const seconds = document.getElementById("seconds")
let time = 0;

setInterval(() => {
    let a =  Math.floor (time / 60)

    if (a % 60 < 10) {
        minutes.innerHTML = "0" + (a % 60)  
    } else {
        minutes.innerHTML = a % 60
    }

    if (Math.floor (a / 60) < 10) {
        hours.innerHTML =  "0" + (Math.floor (a/ 60))
    } else {
        hours.innerHTML = Math.floor (a / 60)
    }
    if (time % 60 < 10) {
        seconds.innerHTML = "0" + (time % 60)
    } else {
        seconds.innerHTML = time % 60
    }
    time++
}, 1000);

// Открытие и скрытие блоков контента
// Для работы функции, необходимо, чтобы весь контент рамзмещался внутри .block_text, иначе он не будет нормально всё скрывать
function showHideBlock(e) {
    document.querySelector(`.${e.path[1].className} .block_text`).classList.toggle("block_text_hide");
    e.target.classList.toggle("rotate_arrow");
}
//дата
const date = document.getElementById("date")
const month = document.getElementById("month")
const year = document.getElementById("year")
const d1 = new Date()
Year = d1.getFullYear()
Month = d1.getMonth()+1
Day = d1.getDate();
date.innerHTML = Day
month.innerHTML = Month
year.innerHTML = Year
localStorage.setItem('date', d1)
