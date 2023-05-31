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
const bet =document.querySelector('.js_advice');
const advice= document.querySelector('.js_advice');
const balance= document.querySelector('.js_balance');
const btn= document.querySelector('.js_btn');
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
console.log (handleClickBtn());


btn.addEventListener("click", handleClickBtn);

//funcion saldo
let userBalance = 50;
    balance.textContent = `Saldo ${userBalance}`

function handleClickBtn(ev) {
    //ev.preventDefault();
    const selectOption = parseInt(select.value);
    console.log (selectOption);
    const randomNumber = getRandomNumber(6);
    console.log (randomNumber);
    
    
    //condición
    if (selectOption === randomNumber ) {
        advice.textContent = "Has ganado el doble de lo apostado";
        const win = userBalance * 2
        win += userBalance;
        
    }else if (selectOption !== randomNumber) {        
        advice.textContent = "Has perdido lo apostado";
    }else {
        advice.textContent = "Vamos a jugar";
    }

}
//FUNCIONES
//Función generadora numero aleatorio 1/6

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
   
/*const randomNumber = getRandomNumber(6); */
  

