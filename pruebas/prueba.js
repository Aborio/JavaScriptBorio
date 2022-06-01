// class Producto{
//     constructor(nombre, precio){
//         this.nombre = nombre;
//         this.precio = parseInt(precio);
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
// let productos = [];
// let i = 0
// while (i < 10){
//     i = new Producto(prompt("Coloque el producto"), prompt("Coloque el precio"));

//     productos = [i];
// }



// let nombre = prompt("Desea ejecutar?");
// if (nombre === "y"){
//     alert ("correct");
// }else if(nombre === "Y"){
//     alert("correct");
// }else{
//     alert("Incorrecto")

//  function protesta(){
//      console.log("Me salio bien creo yo");
//  }
//  function protesta2(){
//      console.log("me salio mal");
//  }

// let boton = document.getElementById("boton");
// // boton.addEventListener("click", protesta);

// let func = prompt("evento") 
// if(func === "click"){
//     boton.addEventListener("click", protesta);
// }else{
//     boton.addEventListener("dblclick", protesta2);
// }



// const Entrada = () => {
//     let solici = prompt("coloque un valor");
//     return alert((solici));
// }

// Entrada()

// const procesamiento = (valor) =>{
//     return ("la entrada es "+valor)
// }

// procesamiento(5)


// class Cliente{
//     constructor(nombre, presupuesto, numeroTelefono){
//         this.nombre = nombre;
//         this.presupuesto = parseInt(presupuesto);
//         this.numeroTelefono = parseInt(numeroTelefono);
//         this.descuento = false;
//     }

//     obtieneDescuento (){
//         this.descuento = true;
//     }

//     transferirDinero(valor){
//         valor = parseIng(prompt("coloque un numero:"));
//         if ((valor > 0) && (valor < presupuesto)) {

//         }
//     }
// }


// let contenedor = document.getElementById("reg");
//     contenedor.innerHTML=`
//     <input type="text" name="Usuario" class="user" placeholder="Digite el usuario">
//         <input type="text" name="Usuario" class="contra" placeholder="Digite la Contraseña">
//         <input type="text" name="Usuario" class="email" placeholder="Digite el email">
//         <button type="button" onclick="registrar()">Enviar</button>`


//  function registrar(){
//      // e.preventDefault();
//     let NuevoUsuario = [];
//     let rUsuario = document.getElementsByClassName("user").value;
//     let rContra = document.getElementsByClassName("contra").value;
//     let rEmail = document.getElementsByClassName("email").value;
        
            
//     console.log(rUsuario);
//     console.log(rContra);
//     console.log(rEmail);
//     NuevoUsuario.push(rUsuario,rContra,rEmail);
//     console.log(NuevoUsuario);

//     localStorage.setItem("usuarios", NuevoUsuario);
// }

// console.log(contenedor);


// const eventoFuturo = (res) => {
//     return new Promise ((resolve,reject) => {
//         if (res === true){
//             resolve("promesa resuelta")
//         }else{
//             reject("promesa inre")
//         }
//     })
// }

// console.log(eventoFuturo(true));
// console.log(eventoFuturo(false));



let listado = document.getElementById("lista");
fetch("https://www.hebcal.com/home/developer-apis")
.then(response => response.json())
.then(datos => console.log(datos));

