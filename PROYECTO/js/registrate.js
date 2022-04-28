class Registrate{
    constructor(usuario, contrasena, email){
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.email = email;
    }

    
}
const usuarios = [];
let usuario1 = new Registrate(prompt("Ingrese Usuario"),prompt("Ingrese contraseña"), prompt("Ingrese email"));
usuarios.push(usuario1);

// // alert(usuarios);  // Si quiero ponerlo como alerta, solo me arroja "Object Object" Cual podria ser el error?
 // console.log(usuarios); Si quiero ponerlo asi, me funciona, ya que en consola del HTML me arroja los datos correctamente.

