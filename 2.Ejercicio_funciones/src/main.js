debugger
let numeroA = parseInt(prompt("Ingrese un Numero: ")); /* prompt abre una ventana para escribir datos */
let numeroB = parseInt(prompt("Ingrese otro Numero: ")); /* parseint convierte el tipo de dato de la variable */

let proceso = sumar (numeroA,numeroB); /* se asigna una variable "proceso" para la funcion"sumar" donde se ingresan las variables */

function sumar (a,b){  /* dentro de la funcion las variables se asignan a los parametros que pide la funcion */
    return a + b; /* la funcion regresa la operacion de los parametros que se le ingresaron */
};

alert ("el resultado de sumar es " + proceso);

