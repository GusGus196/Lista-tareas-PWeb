let producto = {
  id:1,
  nombre: "Lapiz",
  numero:[1,2,3,4,5,6],
  activado: true,
  cantidad:10,
  precio:10
}


export const usuarios = async(req, res) => {
    console.log(producto);
    res.json({tipo:'200',numeros:producto.numero,ciudad:"Colima"});
};
