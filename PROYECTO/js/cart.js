const getCart = () => {
    const getDatos = JSON.parse(localStorage.getItem("carrito"));
    console.log(getDatos)
    const total = getDatos.reduce((acc, el) => acc + el.precio, 0);
    const container = document.getElementById("div");

    getDatos.forEach(element => {
        const item = document.createElement("div");

        item.innerHTML = `<table class="table">
        <thead>
          <tr>
            <th scope="col">Id Producto</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${element.id}</th>
            <td>${element.nombre}</td>
            <td>${element.precio}$</td>
          </tr>
        </tbody>
      </table>`;
        
        
        container.appendChild(item);

        
    }
    );

    const tota = document.createElement("div");
    tota.innerHTML = `<h1>Total : ${total}</h1>`

    container.appendChild(tota)
}


const borrarCartera = () =>{
    localStorage.removeItem("carrito");
    setTimeout(() => {window.location.href = "http://127.0.0.1:5500/PROYECTO/pages/cart.html"},1);
   
}