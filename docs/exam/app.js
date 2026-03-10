const btnAdd = document.getElementById("btnAdd");
const btnUpdate = document.getElementById("update");
const divRecuerdos = document.getElementById("recuerdos");

btnAdd.addEventListener("click", ()=>{
    const divDespliegue = document.getElementById("despliegue");
    const divDetalles = document.getElementById("detalles");
    divDespliegue.classList.remove("azulSucess");
    divDetalles.classList.toggle("invisible");
    divDetalles.classList.toggle("visible");
});

btnUpdate.addEventListener("click", ()=>{
    const txtId = document.getElementById("txtld");
    const txtNombre = document.getElementById("txNombre");
    const txtCantidad = document.getElementById("txCantidad");
    const txtPrecio = document.getElementById("txPrecio");
    const productos = document.getElementById("productos");

    const valores = {
        txtId,
        txtNombre,
        txtCantidad,
        txtPrecio
    }

    valores.json();

    let prod = "";
    valores.forEach(producto => {
        prod += 

        `<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${producto.txtNombre}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Cantidad: ${producto.txtCantidad}</h6>
                <p class="card-text">Precio: ${producto.txtPrecio}.</p>
            </div>
        </div><br>` 
    });
    productos.innerHTML=prod;
});

let imgs = ""
for(let i = 0; i < arrayimgs.length; i++){
    imgs += 
    `<div class="smallimage" id="${'img'+arrayimgs.id}">
        <img src="${arrayimgs[i].url}" alt="${arrayimgs[i].tittle}">
        <footer>${arrayimgs[i].tittle}</footer>
    </div>`
}
