/*
1 crear html
2 crear clases/const
3 Llamar elementos html
--evento click
4 Generar numero aleatorio 1/6
5 comparar el núnmero, condicional, y pintar resultado en pantalla

*/

//TRAER ELEMENTOS HTML

const select = document.querySelector('.js_select');
const betInput =document.querySelector('.js_bet');
const advice= document.querySelector('.js_advice');
const balance= document.querySelector('.js_balance');
const btn= document.querySelector('.js_btn');
const userBalanceSpam= document.querySelector('.js_userBalance');
/*
//EVENTOS click
function handleClickBtn(ev) {
    //ev.preventDefault();
    const selectOption = parseInt(select.value);
    console.log (selectOption);
    const randomNumber = getRandomNumber(6);
    console.log (randomNumber);
    
    //condición
    if (selectOption === randomNumber) {
        advice.textContent = "Has ganado el doble de lo apostado";
        
    }else if (selectOption !== randomNumber) {        
        advice.textContent = "Has perdido lo apostado";
    }else {
        advice.textContent = "Vamos a jugar";
    }

}*/

//funcion saldo
let userBalance = 50;
userBalanceSpam.textContent = userBalance;


//FUNCIONES
//Función generadora numero aleatorio 1/6

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

//function 
const addUserBet = () => {
    const bet = parseFloat(betInput.value);
    userBalance = userBalance + (bet*2);
    userBalanceSpam.innerHTML=userBalance;
}
const decreaseUserBet = () => {
    const bet = parseFloat(betInput.value);
    userBalance = userBalance - bet;
    userBalanceSpam.innerHTML = userBalance;
}

function handleClickBtn(ev) {
    //ev.preventDefault();
    const selectOption = parseInt(select.value);
    console.log (selectOption);
    const randomNumber = getRandomNumber(6);
    console.log (randomNumber);
    
    
//condición
if (selectOption === randomNumber ) {
        
        advice.textContent = "Has ganado el doble de lo apostado😀";
        addUserBet();

    }else if (selectOption !== randomNumber) {   

        advice.textContent = "Has perdido lo apostado😒";
        decreaseUserBet();
    
        
    }

}
btn.addEventListener("click", handleClickBtn);
console.log (handleClickBtn());

/*const randomNumber = getRandomNumber(6); */

//funcion saldo
