'use strict'
/*
1 crear html
2 crear clases/const
3 Llamar elementos html
--evento click
4 Generar numero aleatorio 1/6
5 comparar el núnmero, condicional, y pintar resultado en pantalla

*/

//TRAER ELEMENTOS HTML

const userNumberSelect = document.querySelector('.js_select');
const betInput = document.querySelector('.js_bet');
const advice = document.querySelector('.js_advice');

const btn = document.querySelector('.js_btn');
const userBalanceSpam = document.querySelector('.js_userBalance');


//funcion saldo
let userBalance = 50;



//FUNCIONES
//Función generadora numero aleatorio 1/6

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
};

//function 
const addUserBet = () => {
    const bet = parseFloat(betInput.value);
    userBalance = userBalance + (bet * 2);
    userBalanceSpam.innerHTML = userBalance;
    
};


const decreaseUserBet = () => {
    const bet = parseFloat(betInput.value);
    userBalance = userBalance - bet;
    userBalanceSpam.innerHTML = userBalance;
};

const writeMessage = (nombreVari) => {
    advice.innerHTML = nombreVari;
};
  

const handleClickBtn = (ev)=> {
    ev.preventDefault();
    const selectOption = parseInt(userNumberSelect.value);
    console.log (selectOption);
    const randomNumber = getRandomNumber(6);
    console.log (randomNumber);
    
    
//condición
if (selectOption === randomNumber ) {
        
        writeMessage ("Has ganado el doble de lo apostado😀");
        addUserBet();

    }else if (selectOption !== randomNumber) {   

        writeMessage ("Has perdido lo apostado😒");
        decreaseUserBet();
    
        
    }

};
btn.addEventListener("click", handleClickBtn);


