//Cambios que se pueden hacer con JavaScript

// Accede al documento y obten todos los elementos por su nombre de etiqueta
// Tenemos que guardarlos dentro de una variable
var cajas = document.getElementsByTagName("div");

// Otra forma
var primeraCaja = document.getElementById("primeraCaja");

// cajas[0].textContent = 'hola mundo'
// primeraCaja.innerHTML = '<u>Hola mundo</u>'

//----------Creando nodos en 5 pasos
//creando caja 1
var nuevaCaja = document.createElement("div");
//creando un nodo de texto 2
var contenido = document.createTextNode("Mi caja nueva");
// Unir o inscrutar el nodo al elemento contenido 3
nuevaCaja.appendChild(contenido);
//Agregar un atributo con su clase 'caja naranja' 4
//nuevaCaja.setAttribute("class", "caja naranja");
// Agregar el elemento al documento 5
// var contenedor = document.getElementById("contenedor");
// contenedor.appendChild(nuevaCaja);

// Otra forma lo podemos hacer atreves de su clase
//  var cajas = document.getElementsByClassName("caja");

//Consejo:
//Las clases se trabajan con CSS
//Los id se gtrabajan con JavaScript

// El DOM da una representación del documento como un grupo
// de nodos y objetos estructurados que tienen propiedades y métodos

//--------Modificando la clase o el id de un elemento
nuevaCaja.id = 'primera';
nuevaCaja.className = 'caja naranja';

//Como saber su elemento padre
var padre = cajas[0].parentNode;

//Acceder al elemento padre | paso 5 de la anterior
//Donde quieres posicionar la caja
//padre.insertBefore(nuevaCaja, primeraCaja);

//Remplazar o quitar los nodos, rem algun elemento hijo del elemento padre
padre.replaceChild(nuevaCaja, cajas[0]);

//Eliminar nodos
padre.removeChild(cajas[3]);



