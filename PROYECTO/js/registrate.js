class Registrate{
    constructor(usuario, contrasena, email){
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.email = email;
    }

    
}


// document.getElementById("reg").addEventListener("click", registrar);


function registrar(){
    // e.preventDefault();
    let NuevoUsuario = [];
    let NuevaContra = [];
    let rUsuario = document.getElementById("user").value;
    let rContra = document.getElementById("contra").value;
    let rEmail = document.getElementById("email").value;

    
    // console.log(rUsuario);
    // console.log(rContra);
    // console.log(rEmail);
    NuevoUsuario.push(rUsuario,rContra,rEmail);
    NuevaContra.push(rContra);
    console.log(NuevoUsuario);

    localStorage.setItem("Usuarios", NuevoUsuario);
    localStorage.setItem("Contraseñas", NuevaContra);
}





// // alert(usuarios);  // Si quiero ponerlo como alerta, solo me arroja "Object Object" Cual podria ser el error?
 // console.log(usuarios); Si quiero ponerlo asi, me funciona, ya que en consola del HTML me arroja los datos correctamente.

