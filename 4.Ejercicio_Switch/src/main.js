const UsuarioG = "Lucia";
const ClaveG ="1234";
let ClaveI = "";
let UsuarioI = prompt("Ingrese su usuario");

Validacion (UsuarioG,ClaveG,UsuarioI,ClaveI);

function Validacion () {
    if (UsuarioI==UsuarioG){

        alert("Usuario Correcto");
        
        ClaveI = prompt("Ingrese su contraseña");

        switch (ClaveI==ClaveG) {
            case ClaveI==ClaveG :
                alert("Clave Correcta, ingrese");
                break;

            case ClaveI!=ClaveG :
                alert("Clave Incorrecta");
                break;

        } 

    
    } else
        alert("Usuario Incorrecto");
}



