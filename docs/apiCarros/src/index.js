const btnListar = document.getElementById("btnListar");
let list = "";

btnListar.addEventListener("click", () =>{
    const divList = document.getElementById("divList");
    list = "";
    fetch("http://localhost:3000/vehiculos")
        .then(response => response.json())
        .then(carros => {
            carros.forEach(carro => {
                list += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${carro.marca}</h5>
                        <p class="card-text">${carro.modelo}</p>
                        <p class="card-text">${carro.placa}</p>
                        <button id="btnEliminar" onclick="delCarro('${carro.placa}')" type="button">Eliminar</button>
                    </div>
                </div>
                <br>
                `;
            });
            divList.innerHTML = list;
        })
    .catch(error => console.error('Error', error));
})

const btnAgregar = document.getElementById("bntAgregar");
btnAgregar.addEventListener("click", () =>{
    const placa = document.getElementById("placa").value;
    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    fetch("http://localhost:3000/vehiculos", {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },    
        body: JSON.stringify({
            placa: placa,
            marca: marca,
            modelo: modelo
        })
    }) 
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok'); // Handling HTTP errors manually
    }
    return response.json(); // Parsing the JSON response
    })
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
});

const btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", ()=>{
    const placa = document.getElementById("placa").value;
    const divList = document.getElementById("divList");
    list = "";
    fetch(`http://localhost:3000/vehiculos/${placa}`)
        .then(response => response.json())
        .then(carro =>{
            list += `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${carro.marca}</h5>
                        <p class="card-text">${carro.modelo}</p>
                        <p class="card-text">${carro.placa}</p>
                    </div>
                </div>
                <br>
            `;
            divList.innerHTML = list;
        })
})


function delCarro(id){
    fetch(`http://localhost:3000/vehiculos/${id}`, {
        method: 'delete'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Handling HTTP errors manually
        }
        return response.json(); // Parsing the JSON response
    })
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));

    
}