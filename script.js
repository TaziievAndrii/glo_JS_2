'use strict';


const getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max-min) + min)
}
let num = getRandomNumber(1, 100);
console.log("[num]", num);


function searchNumb() {

    const ask = prompt('Угадай число от 1 до 100')
    console.log("[ask]", ask);

    if (ask === null) return alert("Игра окончена")

    if(num < ask ) {
    alert("Загаданное число меньше") 
    searchNumb() 
    } else if (num > ask){ 
        alert("Загаданное число больше")
        searchNumb() 
    } else if(isNaN(ask)) {
        alert('Введи число!')
        searchNumb() 
    } else if ( ask == num) {
        alert('"Поздравляю, Вы угадали!!!"')
        return
    } 
    
    
}

searchNumb()