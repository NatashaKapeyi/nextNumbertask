//return next number
const input = document.querySelector('input');
const result= document.querySelector('.result');
let button = document.querySelector('.button');
button.addEventListener('click', Next)

function Next(){
 const next = ++input.value 
 result.textContent=(input.value)
}