


function iniciarSesion() {

    let sUsuario = document.getElementById("Suser").value
    console.log(sUsuario)
    let sContrasena = document.getElementById("Scontra").value;
    
    const users = JSON.parse(localStorage.getItem("users")) || []; //si "users" no existe, entonces lo crea, sino devuelve el array de users
    
    for (let i = 0; i < users.length; i++) {
        if (sUsuario == users[i].usuario && sContrasena == users[i].contrasena) {
            Swal.fire(
                'Bienvenido',
                users[i].usuario,
                'success'
              )
            return;
        }
    }
    Swal.fire(
        'Usuario y/o contraseña incorrecto',
        'Intentelo devuelta',
        'error'
      );
    return;
}