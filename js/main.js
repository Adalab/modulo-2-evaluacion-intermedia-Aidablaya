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
const advice= document.querySelector('.jsa_advice');
const balance= document.querySelector('.js_balance');
const btn= document.querySelector('.js_btn');

//EVENTOS click
function handleClickBtn(ev) {
    //ev.preventDefault();
    const selectOption = select.value;
    //randomnumber
    const randomNumber = getRandomNumber(6);
    //condición
    if (randomNumber === parseInt(selectOption)) {
        advice.textContent = "Has ganado el doble de lo apostado";
        
    }else if (selectOption === "") {
        advice.textContent = "Vamos a jugar";
    }else {
        advice.textContent = "Has perdido lo apostado";
    }
}
console.log (handleClickBtn());


btn.addEventListener("click", handleClickBtn);

//CONDICIONAL/COMPARA
/*
if (randomNumber === parseInt(selectOption)) {
    advice.textContent = "Has ganado el doble de lo apostado";
}else if (randomNumber === "") {
    advice.textContent = "Vamos a jugar";
}else {
    advice.textContent = "Has perdido lo apostado";
}
;
*/

//FUNCIONES
//Función generadora numero aleatorio 1/6

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
const randomNumber = getRandomNumber(6); 
console.log (randomNumber);  

