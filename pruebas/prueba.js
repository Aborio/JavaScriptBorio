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

 function protesta(){
     console.log("Me salio bien creo yo");
 }
 function protesta2(){
     console.log("me salio mal");
 }

let boton = document.getElementById("boton");
// boton.addEventListener("click", protesta);

let func = prompt("evento") 
if(func === "click"){
    boton.addEventListener("click", protesta);
}else{
    boton.addEventListener("dblclick", protesta2);
}




