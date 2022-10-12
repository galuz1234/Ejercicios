debugger
let numeroA = parseInt(prompt("Ingrese un número"));
let numeroB = parseInt(prompt("Ingrese un número"));
let proceso = sumar (numeroA,numeroB);

function sumar(a,b){
    return a+b;
} ;

alert("El resultado de sumar"  + numeroA  +"+" + numeroB + "="  + proceso);

debugger
let numeroC = parseInt(prompt("Ingrese un número"));
let numeroD = parseInt(prompt("Ingrese un número"));
let resta = restar(numeroC,numeroD);

function restar(c,d){
    return c-d;
} ;

alert("El resultado de restar"  + numeroC  +"+" + numeroD + "="  + resta);


debugger
let numeroE = parseInt(prompt("Ingrese un número"));
let numeroF = parseInt(prompt("Ingrese un número"));
let producto = multiplicar (numeroE,numeroF);

function multiplicar(e,f){
    return e*f;
} ;

alert("El resultado de multiplicar es: " + producto);