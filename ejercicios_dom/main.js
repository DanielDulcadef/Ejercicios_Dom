// Cambiar el color del titular del negro actual a rojo y además debe quedar centrado. El único cambio será en el bloque cambiar y el código de función cambiar()
// function cambiar(){
//    let text = document.getElementById('titular')
//    text.style.color = "red";
//     text.style.textAlign = "center";

// }

// Escribe un script de nombre creaDiv() que crea un nuevo bloque div en la página modelo. El bloque se creará al pulsar el botón con texto Crear, sus colores serán texto blanco con fondo rojo 
// y el texto quedará centrado. Este texto consiste en la cadena  Javascript permite crear páginas dinámicas.

// El botón ya existe solo es necesario escribir la función, procurando usar los métodos de document para crear nodos.


// function crearDiv(){
//     let cambio1 = document.createElement('div');
//     cambio1.style.color = "white";
//     cambio1.style.textAlign = "center";
//     cambio1.style.backgroundColor = "red";
//     cambio1.innerText = "Javascript permite crear páginas dinámicas.";
//     document.querySelector("body").appendChild(cambio1);

// }



//En la página web modelo debes lograr que al pulsar el botón con el texto borrar se deberá eliminar el bloque que aparece bajo el titular, no ocultar, sino borrarlo. 
// Para detalles mira el código fuente de la página. Solo tienes que escribir el código de la función borrar()

// 

// function borrarDiv(){
// let remove1 = document.getElementById('subtitulo')
// remove1.remove();
// }


// La página web modelo contiene tres imágenes. Cada imagen está en un bloque figure con un elemento figcaption para un pie de foto. 
// Al pulsar sobre cualquier imagen se debe mostar su atributo alt en su pie de foto. Si el pie ya está relleno se borrará su contenido y no se escribirá nada.
// Cada imagen es como un botón que alterna el pie de foto entre vacio (sin texto) y el valor del atributo alt de cada una.


// function ponerPie(fig) {
//     let pie = fig.getElementsByTagName('figcaption')[0];   // se pone [0] porque hace referencia en este caso al primer elemento de figure (en este caso la imagen )
//     let img = fig.getElementsByTagName('img')[0];
//     // pie.innerText = img.alt;

//     if (pie.innerText == "") {         //si el texto esta vacio 
//         pie.innerText = img.alt;       //printar el "alt: texto que describe la imagen"
//     }

//     else {
//         pie.innerText = ""    //si no se cumple lo anterior borar (printar nada)
//     }
// }


// function ponerPie(fig){
// let pie = fig.querySelector('figcaption')
// let img = fig.querySelector('img')
// if (fig.innerText == '') {
//     pie.innerText = img.alt;
// }
// else{
//     pie.innerText = '';
// }
// }


// En este script debes leer todos los elementos tipo imagen de la página y mostrar sus 
// urls en un bloque tipo div cuyo id es fuentes y que ya existe en la página modelo
//  usada para estos ejercicios. El script se ejecutará al pulsar el botón con el texto 
//  fuentes

// El bloque ya está creado solo tienes que crear la función denominada fuentesImg()
//  asociada al botón fuentes


// function fuentesImg() {
//     let img = document.getElementsByTagName('img');
//     let img2 = document.getElementById('fuentes');
// }

// 7. El script que tienes que crear en la página modelo 
// debe cambiar la clase del elemento que contiene al 
// encabezado de la página. Al pulsar sobre el titular se
//  añadirá o se eliminarás (toggle) la clase de nombre activo.

// Tienes que modificar el botón clase y completar la
//  función toggle() para producir este efecto.


function togleClase(){
let pag = document.getElementById('titular');
pag.classList.toggle('activo');
} 
console.log(togleClase)















