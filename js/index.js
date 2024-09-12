/**GENERAR COMENTARIOS
 * JS ES SECUENCIAL LEE DE LINEA A LINEA DE ARRIBA HACIA ABAJO
 * 
 * 
 * 
 * variable = espacio de memoria reservado que aloja un datos, los tipos de datos que almacena son vari
 * numericos, string, boolean , arrays, objeto, function
 * 
 * 
 * scope se refiere a ambito y hace referencia al contexto en el que la variable va a ser accesible o visible
 * es de donde se va a poder accerder
 * 
 * palabra clave(var,let o const) seguido del nombre de la variable
 * seguido del nombre(referencia al dato que aloja) = dato ;
 * 
 * 
 * var => nose recomienda mucho, se usaba antes en js
 * scope de tipo global, se puede acceder al dato que contiene en cualquier parte del codigo
 * 
 */
/*
var numero = 18; esto es ejempli*/

/**
 * let => tiene un scope de bloque, y solo va a existir esta variable
 * dentro del bloque de codigo donde fue declarada. el dato que se aloja adentrp de la variable
 * se puede modificar. utilizan cameLcase => primeraPalabra
 * const => es una variable de tipo constante. que no se va a modificar en el tiempo, 
 * son valores fijos
 * las contastes se crean usando mayusculas VEINTE_Y_DOS(utilizan snakeCase)
 * no se puede modificar los datos
 * 
 * en js las variables son key sensitive => quiere decir q js dependiendo como la escribamos la considerar diferente
 */
//variable declara e inicializada
let veinteYUno = 21;
console.log(veinteYUno);
veinteYUno= "hola como estas";
console.log(veinteYUno)

const VEINTE_Y_DOS= 22;
//console.log(VEINTE_Y_DOS)
//VEINTE_Y_DOS = "veinte y dos";
console.log(VEINTE_Y_DOS);
//tira error xq no se le puede asignar otro valor

let numerOUno = 2;
let  numerODos= 3;

const SUMA = numerOUno + numerODos;

console.log("el resultdo de la suma es: " + SUMA)

let palabrAUno = "coder";
let palabrADos= "house";

console.log("estudio en " +palabrAUno+palabrADos)

let palabrAIngresada = prompt("Introduzca su nombre:")

//los datos que recupera prompt los revcura como cadena
console.log(palabrAIngresada.toString+""+palabrAUno+palabrADos)