// const numeros = [1,2,3,4,5];
// for (let i = 0; i < numeros.length; i++) {
//    console.log(numeros[i]);
    
// }

// numeros.forEach(function(numero){
// console.log(numero)
// });

// ["Bilbo", "Gandalf", "Nazgul"].forEach(alert);
// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array)=>{
//     alert(`${item} is an index${index} in ${array}`);
// });

//====================================parametros====================================
//function()

//entre parentesis
//current value = el valor del elemento actual del array 
//index = indice del valor 
//arr = objeto del array al que pertenece el elemento actual 

//thisValue


//============================================ejercicios=========================================================


// You are given some names of different fruit and an unordered list html element;
//  add a list item for each to the unordered list.


// const fruitList = ['apple', 'banana', 'tomato' ];
// let ul = document.createElement('ul');
// fruitList.forEach((fruit) => {
//     let li = document.createElement('li');
//     li.textContent = fruit; 
//     ul.appendChild(li)
// });


// const fruitList = ['apple', 'banana', 'tomato' ];
// //tomar el UL.
// const ulElement = document.querySelector('ul');
// //recorrido porCada LI y le añadimos el texto del array.
// fruitList.forEach((fruit) => {
//   let itemElement = document.createElement('li');
//   itemElement.textContent = fruit;
//   ulElement.appendChild(itemElement);
// });


// Change the text in the first and the last list item element in every unordered list
//  element on this page. Change it to 'first' and 'last'.

// let list = document.querySelectorAll('ul')
// list.forEach((ul) => {


// ul.firstElementChild.innerText = 'first';


// ul.lastElementChild.innerText = 'last';


// })





