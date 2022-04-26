function iniciarSesion(usuario,contraseña){
    usuario = prompt("Ingrese el Usuario:")
    contraseña = prompt("Ingrese contraseña")
    if ((usuario == "Usuario") && (contraseña === "Contraseña")){
        alert("Bienvenido "+ usuario)
    }else{
        alert("Usuario o contraseña erroneos")
    }
        
}

iniciarSesion();