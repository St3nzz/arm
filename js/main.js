// Получили круг
const circle = document.querySelector('.progress__ring-circle');
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
// Счётчик
const counter = document.querySelector('.conscription__counter-number');
// Считаем количество дней до конца призыва
const finish_date = new Date("July 15 2021");
const start_date = new Date("April 1 2021");
let date = Date.now();

let total_time = Math.round((finish_date - start_date) / 1000 / 60 / 60 / 24);
let remaining = Math.round((finish_date - date) / 1000 / 60 / 60 / 24);
// Выводим дни на страницу в счётчик
counter.textContent = "0" + remaining;

let percents = (remaining / total_time) * 100;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

setProgress(percents);

// Меню

const burger = document.querySelector('.header__top-burger');
const menu = document.querySelector('.header__menu');
const close = document.querySelector('.header__menu-close');
burger.onclick = () => {
    if(screen.width < 991){
        burger.style.display = "none";
        menu.style.top = "0";
    }
};
close.onclick = () => {
    if(screen.width < 991){
        burger.style.display = "block";
        menu.style.top = "-100%";
    }
};
if(screen.width>991){
    burger.style.display="none";
}