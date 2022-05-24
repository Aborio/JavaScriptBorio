


function iniciarSesion(){
    let usuario = sessionStorage.getItem("Usuarios");
    let contraseña = sessionStorage.getItem("Contraseñas");
    let sUsuario = document.getElementById("Suser")
    let sContraseña = document.getElementById("Sconra");


    sUsuario === usuario && sContraseña === contraseña ? Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Sesion iniciada!',
        showConfirmButton: false,
        timer: 1500
      }) : Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Error en usuario y/o contraseña',
        showConfirmButton: false,
        timer: 1500
      })
  
}

iniciarSesion();