// if => sentencia si una condicion se cumple
/*
if(condicion){
     se ejecuta la condicion o lo que queremos qeue se devuelva

}*/

let a , b , c , d ;


/*
operador de comparador relacional
 = asignacion
 == igualdad (comparar valores y no tipo de dato)
 === operador de igualdad estricto ( compara valores y el tipo de datos)
 != distinto
 !== estrictamente estricto






*/
/*
a= 23;

if (a == "18") {
    console.log("es un 18")
    
}

if (a ===18) {
    console.log("me devolves 18")
}else{
console.log("no va funcionar xq no es el mismo tipo de dato")
    
}*/

//cuantos años tengo
// con promt siempre devuelve string hay q parsearlo
// cuando lleva numero flotante o decimal va con parsefloat
/*
operadores 
mayor > (el numero es mayor al que se esta comparando)
    >=(el numero es mayor o igual al que se esta comparando)
menor <(el numero es menor al que se esta comparando)
<=(el numero es menor o igual alque se esta comparando)
*/
//let edad = parseInt(prompt("por favor ingresa tu edad para acceder al bolichee : "));

/*if( edad ===18){
    console.log(" el pibe puede entrar")
}else{
    console.log(" el pibe no puede entrar")
}*/
/*
if( edad <18){
    console.log(" el pibe puede entrar")
}else{
    console.log(" el pibe no tiene 18")
}*/

// else if => cuando nosotros queremos comparar o hacer multiples condiciones

// notas de evaluacion
// si es mayor a 90 el examen es optimo
// si el examen es 75 es correcto
// si el examen es 60 es bajo
//si el examen es menos de 60 desaprobado

/*let nota = parseFloat(prompt("ingrese nota del alumno :"))


if (nota>=90) {
    console.log("el pibe es crack saco " + nota +" el examen es optimo")
    
}else if(nota >=75){
    console.log("el pibe esta bien saco " + nota +"  un correctos")

}
else if(nota>=60){
    console.log("el pibe safo tiena una nota " + nota +" y es baja")
}
else{
    console.log("ni chat gpt lo salvo, saco " + nota +" y esta desaprobado")
}*/

/*
    operador logico and &&
    ESTE OPERADOR VA A DEVOLVOR TRUE SIEMPRE Y CUANDO LAS CONDICIONES QUE SE COMPAREN
    SEAN VERDADERAS
    a   b   a&&b
    t   t   t
    t   f   f
    f   t   f
    f   f   t


*/

/*
let edad = parseInt(prompt("ingrese edad"));

let tieneLicencia = true;

if (edad >= 18 && tieneLicencia ===true){
    console.log("esta habilitado para conducir")
    
}
else{
    console.log("no esta habilitado para conducir")
}*/
/*
    operador OR se expresa con || se va a ejecuta el bloque de codigo si al menos una 
    condicion es verdadera
    a  b  a||b
    t   t   t
    t   f   t
    f   t   t   
    f   f   f

*/

/*let nombre = "juan";

let apellido = "Perez";

let edad = 15;

if(nombre === "juan" && apellido === "Perez" || edad >=18){
    console.log("La  persona cumple los requisitos para la encuenta")
}
else{
    console.log("La  persona no cumple los requisitos para la encuenta")
}*/

/*
operador not !=
    true =>  !true => false
    false => !false => verdadero

*/ 


let campoNombre = "";
if(!campoNombre){
    console.log("el campo nombre esta vacio")
}
else{
    console.log("el campo nombre no esta vacio")

}