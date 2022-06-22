class Producto{
        constructor(id, nombre, precio, imagen){  //LE AGREGUE ATRIBUTO id A LA CLASE
            this.id = id;
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
// LE AGREGUÉ MANUALMENTE EL id A CADA PRODUCTO
let producto1 = new Producto(1,"Matera", 300, "https://http2.mlstatic.com/D_NQ_NP_814774-MLA46091331920_052021-W.webp"); //Esto despues lo colcaria el administrador con un prompt probablemente
let producto2 = new Producto(2,"Pantuflas", 500, "https://http2.mlstatic.com/D_NQ_NP_907552-MLA45548121980_042021-W.webp");
let producto3 = new Producto(3,"Termos", 1000, "https://http2.mlstatic.com/D_NQ_NP_823713-MLA46192402341_052021-V.webp");
let producto4 = new Producto(4,"Bombillas", 500,"https://http2.mlstatic.com/D_NQ_NP_898479-MLA45731292464_042021-W.webp");

productos = [producto1, producto2, producto3, producto4];

// console.log(productos);


const compra1 = [productos[0], productos[1]];
const compra2 = [productos[3], productos[2]];




const total1 = compra1.reduce((nom,el) => nom + el.precio, 0);
const total2 = compra2.reduce((nom,el) => nom + el.precio, 0);



for (const producto of productos){
    let contenedor = document.createElement("productos");
    contenedor.innerHTML=`
    <div id="producto${producto.id}" class="card container" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="matera">
        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.precio}$</p>
            <button id="boton" class="btn btn-primary" onclick="Carrito(${producto.id})">Agregar al carrito</button>
        </div>
    </div>`;   

    //LINEA 46: LE AGREGUE un "id="producto(N)" A CADA DIV QUE CONTIENE UN PRODUCTO PARA QUE LOS IDENTIFIQUES MAS FACIL
    //LINEA 51: LE AGREGUE UN "onclick" QUE SE EJECUTA AL HACER CLICK EN ESE BOTON Y LLAMA A LA FUNCION Carrito ENVIANDOLE EL ID DE DICHO PRODUCTO
                           
document.body.appendChild(contenedor);
}

const Carrito = id => {
    let producto = productos.find(producto => producto.id === id); //BUSCA EL PRODUCTO CON EL ID DESEADO
    let form = producto.nombre;  // SAQUÉ EL ".value" PORQUE NO ES NECESARIO
    alert("Agregaste " + form); 
}

let boton = document.getElementById("boton");


