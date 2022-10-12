/* debugger
const passwordSave = "Esta es mi contraseña";
let User = prompt("Ingrese su usuario");
let passwordUser = prompt("Ingrese su contraseña");
let saludo = "Bienvenido usuario @" +  User;

if (passwordUser == passwordSave){

    document.write(saludo);

} else {

    alert("su usuario o contraseña estan errados");
} */

/* ejercicio completo de condicionales para validar usuario y contraseña 

const passwordSave = "Esta_es_mi_contraseña";
const UserSave ="Alejandro";
let User = prompt("Ingrese su usuario");
let passwordUser = prompt("Ingrese su contraseña");
let saludo = "Bienvenido usuario @" +  User;

if (passwordUser===passwordSave & User===UserSave){
    document.write(saludo)
}else if (passwordUser===passwordSave || User===UserSave){
    if (passwordUser!=passwordSave){
            alert("su contraseña esta errada");
        }else if (User != UserSave){
            alert("su usuario esta errado");
        }
} else {
alert("su usuario y contraseña estan errados");
} */

/* Ejercicio de validacion de usuario 
const UsuarioG = "Lucia";
const ClaveG ="1234";
let UsuarioI = prompt("Ingrese su usuario");
let ClaveI = prompt("Ingrese su contraseña");
let proceso = acceso (UsuarioI, ClaveI)

function accesoU (Ui,Ci){
    
    if (Ui===UsuarioG & Ci===ClaveG){
        document.write("Acceso concedido @" + Ui)
    }else if (ClaveI===ClaveG || UsuarioI===UsuarioG){
        if (ClaveI!=ClaveG){
                alert("su contraseña esta errada");
            }else if (UsuarioI != UsuarioG){
                alert("su usuario esta errado");
            }
    } else {
    alert("su usuario y contraseña estan errados");
    }   
}; */

const UsuarioG = "Lucia";
const ClaveG ="1234";
let UsuarioI = prompt("Ingrese su usuario");
let procesoU = validarU (UsuarioI, UsuarioG);

function validarU (Ui,Ug){
    if (Ui===Ug){
        alert("Usuario Correcto");  


        let ClaveI = prompt("Ingrese su contraseña");
        let procesoC = validarC (ClaveI, ClaveG);
        function validarC (Ci,Cg){
            if (Ci===Cg){
                alert("Clave correcta")
            }else{
            alert("su contraseña esta errada");
        }
    } 
    document.write("el usuario y contraseña son correctos, acceso confirmado");        
    } else{
    alert("su usuario esta errado");
}
}












