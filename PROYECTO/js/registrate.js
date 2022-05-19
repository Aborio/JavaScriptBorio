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
    let rUsuario = document.getElementsByClassName("user").value;
    let rContra = document.getElementsByClassName("contra").value;
    let rEmail = document.getElementsByClassName("email").value;

    
    // console.log(rUsuario);
    // console.log(rContra);
    // console.log(rEmail);
    NuevoUsuario.push(rUsuario,rContra,rEmail);
    console.log(NuevoUsuario);

    localStorage.setItem("Usuarios", NuevoUsuario);
}





// // alert(usuarios);  // Si quiero ponerlo como alerta, solo me arroja "Object Object" Cual podria ser el error?
 // console.log(usuarios); Si quiero ponerlo asi, me funciona, ya que en consola del HTML me arroja los datos correctamente.

