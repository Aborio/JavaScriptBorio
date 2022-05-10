class Producto{
        constructor(nombre, precio, imagen){
            this.nombre = nombre;
            this.precio = parseInt(precio);
            this.imagen = imagen;
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
let producto1 = new Producto("Matera", 300, "https://http2.mlstatic.com/D_NQ_NP_814774-MLA46091331920_052021-W.webp"); //Esto despues lo colcaria el administrador con un prompt probablemente
let producto2 = new Producto("Pantuflas", 500, "https://http2.mlstatic.com/D_NQ_NP_907552-MLA45548121980_042021-W.webp");
let producto3 = new Producto("Termos", 1000, "https://http2.mlstatic.com/D_NQ_NP_823713-MLA46192402341_052021-V.webp");
let producto4 = new Producto("Bombillas", 500,"https://http2.mlstatic.com/D_NQ_NP_898479-MLA45731292464_042021-W.webp");

productos = [producto1, producto2, producto3, producto4];

// console.log(productos);


const compra1 = [productos[0], productos[1]];
const compra2 = [productos[3], productos[2]];




const total1 = compra1.reduce((nom,el) => nom + el.precio, 0);
const total2 = compra2.reduce((nom,el) => nom + el.precio, 0);


for (const producto of productos){
    let contenedor = document.createElement("productos");
    contenedor.innerHTML=`
    <div class="card container" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="matera">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}$</p>
            <a href="#" id="boton" class="btn btn-primary">Agregar al carrito</a>
        </div>
    </div>`;
                           
document.body.appendChild(contenedor);
}

const Carrito = (productos) => {
    let form = productos.nombre.value
    alert("Agregaste " + form); //aca se me esta generando un undefined en el boton agregar al carrito
}

let boton = document.getElementById("boton");
boton.addEventListener("click", Carrito);

