class Producto {
    constructor(nombre, cantidad, precio, categoria, fecha){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.categoria = categoria;
        this.fecha = fecha;
    }
}

class Inventario{
    constructor(){
        this.porducto = new Map()
    }

    agregar(porducto){
        this.porducto.set(porducto.nombre, porducto);
    }

    obtener(nombre){
        return this.porducto.get(nombre);
    }

    eliminar(nombre){
        this.porducto.delete(nombre);
    }

    mostrar(nombre){
        this.porducto.forEach(p => {
            console.log(p.nombre, p.cantidad, p.precio, p.categoria, p.fecha);
        })
    }
}

const inventario = new Inventario();

document.getElementById("btnAgregar").addEventListener("click", () => {
    const nombre =document.getElementById("name").value;
    const cantidad =document.getElementById("amount").value;
    const precio =document.getElementById("cost").value;
    const categoria =document.getElementById("categoria").value;
    const fecha =document.getElementById("date").value;

    if(inventario.obtener(nombre)){
        mostrarMensaje("El producto ya existe", "error");
        return;
    }

    const producto = new Producto(nombre, cantidad, precio, categoria, fecha);
    inventario.agregar(producto);

    mostrarMensaje("Producto agregado correctamente", "exito");

});

document.getElementById("btnBuscar").addEventListener("click", () =>{
    const nombre = document.getElementById("buscar").value;
    inventario.mostrar(nombre);
})

function mostrarMensaje(texto, tipo){
    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = texto;
    mensaje.className = "mensaje " + tipo + " mostrar";

    setTimeout(() => {
        mensaje.classList.remove("mostrar");
    }, 3000);
}