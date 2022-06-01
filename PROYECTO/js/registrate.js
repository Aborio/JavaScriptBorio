class User{
    constructor(usuario, contrasena, email){
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.email = email;
    }

    
}



function registrar(){
    
    let rUsuario = document.getElementById("user").value;
    let rContra = document.getElementById("contra").value;
    let rEmail = document.getElementById("email").value;
    if (rUsuario === "" || rContra === "" || rEmail === "") {
        alert("Debe completar los campos")
    }else{
    const newUser = new User(rUsuario, rContra, rEmail);  // crea un objeto "user"
    const users = JSON.parse(localStorage.getItem("users")) || []; //si "users" no existe, entonces lo crea
    users.push(newUser); //agrega el objeto "user" al array "users"
    localStorage.setItem("users", JSON.stringify(users)); //guarda el array "users" en el localStorage
    Swal.fire(`${rUsuario} registrado con exito`)  // muestra un mensaje de registro exitoso
    }
    // setTimeout(() => {window.location.href = "http://127.0.0.1:5500/PROYECTO/pages/iniciarSesion.html"},2500); //En produccion
    
}



 const validarEmail = () =>{
    const usersE = JSON.parse(localStorage.getItem("users"));
    let rEmail = document.getElementById("email").value;
    for (let i = 0; i < usersE.length; i++) {
        if (rEmail === usersE[i].email){
            alert("Email repetido, utilice otro");
        }else{
            return registrar();
        }
    }
}







// // alert(usuarios);  // Si quiero ponerlo como alerta, solo me arroja "Object Object" Cual podria ser el error?
 // console.log(usuarios); Si quiero ponerlo asi, me funciona, ya que en consola del HTML me arroja los datos correctamente.

