'use strict';

const getRandomNumber = function(min, max) {
    let num = Math.floor(Math.random() * (max-min) + min)

    function searchNumb() {
    
        const ask = prompt('Угадай число от 1 до 100')
    
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
    return searchNumb ()
}

getRandomNumber(1, 100);