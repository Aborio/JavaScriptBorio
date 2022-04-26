// class Producto{
//     constructor(nombre, precio, cantidadStock){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidadStock = cantidadStock;
//         this.stock = true;
//         this.vendido = false;
//     }

    


//     stocki(){
//         this.stock = false;
//     }

//     vender(){
//         this.vendido = true;
//     }
// }


// let producto1 = new Producto("Yerbero", 20 , 10);

// console.log(producto1.nombre);
// producto1.stocki();
// producto1.vender()




class Cuentas{
    constructor(usuario, contrasena, dateBird,email){
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.dateBird = dateBird;
        this.email = email;
    }


    
    iniciarSesion(usuario,contraseña){
        usuario = prompt("Ingrese el Usuario:")
        contraseña = prompt("Ingrese contraseña")
        if ((usuario == "Usuario") && (contraseña === "Contraseña")){
            alert("Bienvenido "+ usuario)
        }else{
            alert("Usuario o contraseña erroneos")
        }
    }
}







