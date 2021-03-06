class Producto{
        constructor(id,nombre, precio, imagen){
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
// let producto1 = new Producto(1,"Matera", 300, "https://http2.mlstatic.com/D_NQ_NP_814774-MLA46091331920_052021-W.webp"); //Esto despues lo colcaria el administrador con un prompt probablemente
// let producto2 = new Producto(2,"Pantuflas", 500, "https://http2.mlstatic.com/D_NQ_NP_907552-MLA45548121980_042021-W.webp");
// let producto3 = new Producto(3,"Termos", 1000, "https://http2.mlstatic.com/D_NQ_NP_823713-MLA46192402341_052021-V.webp");
// let producto4 = new Producto(4,"Bombillas", 500,"https://http2.mlstatic.com/D_NQ_NP_898479-MLA45731292464_042021-W.webp");

// productos = [producto1, producto2, producto3, producto4];

// for (const producto of productos){
//     let contenedor = document.createElement("productos");
//     contenedor.innerHTML=`
//     <div id="producto${producto.id}" class="card container" style="width: 18rem;">
//         <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
//         <div class="card-body">
//             <h5 class="card-title">${producto.nombre}</h5>
//             <p class="card-text">${producto.precio}$</p>
//             <a href="#" id="boton" class="btn btn-primary" onclick="Carrito(${producto.id})">Agregar al carrito</a>
//         </div>
//     </div>`;
                           
//     document.body.appendChild(contenedor);
// }
let carrito = [];
const Carrito = (id) => {
    let producto = productos.find(producto => producto.id === id);
    let form = producto.nombre;
        alert("agregaste " + form);
    carrito.push({
        id : producto.id,
        nombre : producto.nombre,
        precio : producto.precio,
        })
    // const carriton = JSON.parse(localStorage.getItem("carrito")) || [];
    // carriton.push(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));









}


const traerDatosJson = async () =>{
    let response = await fetch("../Apis/productos.json");
    let data = await response.json();
    productos = data;
   

    for (const producto of productos){
        let contenedor = document.createElement("div1");
        contenedor.innerHTML=`
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div class="col mb-5">
                        <div class="card h-100">
                            <img class="card-img-top" src="${producto.imagen}" alt="..." />
                            <!-- Product details-->
                            <div class="card-body p-4">
                                <div class="text-center">
                                    <!-- Product name-->
                                    <h5 class="fw-bolder">${producto.nombre}</h5>
                                    <!-- Product price-->
                                    ${producto.precio}$
                                </div>
                            </div>
                            <!-- Product actions-->
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#" onclick= Carrito(${producto.id})>Agregar al carrito</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>`;
                               
        document.body.appendChild(contenedor);
    }
}


const show = () =>{

    const carito = JSON.parse(localStorage.getItem("carrito")) || [];
    for (const carito of carrito){

        
        let contenedor1 = document.createElement("div2");
        contenedor1.innerHTML=`<div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Cartera</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">Carrito</button>
            </div>
            <div class="modal-body">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">${carrito.id}</th>
                <td>${carrito.nombre}</td>
                <td>${carrito.precio}</td>
              </tr>
            </tbody>
          </table>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
        
        
        `
        document.body.appendChild(contenedor1);
    }
}