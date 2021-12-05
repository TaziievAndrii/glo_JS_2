'use strict';

const getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}

let num = getRandomNumber(1, 100);

function searchNumb() {
    let numb = num

    const ask = prompt('Угадай число от 1 до 100')

    if (ask === null) return alert("Игра окончена")

    if(numb < ask ) {
    alert("Загаданное число меньше") 
    searchNumb() 
    } else if (numb > ask){ 
        alert("Загаданное число больше")
        searchNumb() 
    } else if(isNaN(ask)) {
        alert('Введи число!')
        searchNumb() 
    } else if ( ask == numb) {
        alert('"Поздравляю, Вы угадали!!!"')
        return
    } 
}

searchNumb()