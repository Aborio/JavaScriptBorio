class Producto{
        constructor(nombre, precio){
            this.nombre = nombre;
            this.precio = parseInt(precio);
            this.stock = true;
            this.vendido = false;
        }
    
        
    
    
        stocki(){
            this.stock = false;
        }
    
        vender(){
            this.vendido = true;
        }
}

let productos = [];
let producto1 = new Producto("Matera", 300 ); //Esto despues lo colcaria el administrador con un prompt probablemente
let producto2 = new Producto("Pantuflas", 500);
let producto3 = new Producto("Termos", 1000);
let producto4 = new Producto("Bombillas", 500);

productos = [producto1, producto2, producto3, producto4];

// console.log(productos);


const compra1 = [productos[0], productos[1]];
const compra2 = [productos[3], productos[2]];




const total1 = compra1.reduce((nom,el) => nom + el.precio, 0);
const total2 = compra2.reduce((nom,el) => nom + el.precio, 0);

console.log(total1);
console.log(total2);



