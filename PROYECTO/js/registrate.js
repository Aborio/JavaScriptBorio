class Registrate{
    constructor(usuario, contrasena, email){
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.email = email;
    }

    
}

function validarFormulario(e){
    e.preventDefault();
    console.log("Bienvenido " + e.target.children[1].value);    
}
const usuarios = [];
let usuario1 = document.getElementById("reg");
usuario1.addEventListener("submit", validarFormulario);




// // alert(usuarios);  // Si quiero ponerlo como alerta, solo me arroja "Object Object" Cual podria ser el error?
 // console.log(usuarios); Si quiero ponerlo asi, me funciona, ya que en consola del HTML me arroja los datos correctamente.

