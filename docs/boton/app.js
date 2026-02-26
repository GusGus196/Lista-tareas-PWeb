const btnCargar = document.getElementById("btnCargar");
btnCargar.addEventListener("click", ()=>{    
    btnCargar.classList.toggle("btn-primary");
    btnCargar.classList.toggle("btn-secondary");
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usuarios => {
        let datos = document.getElementById("datos");
        let text="";
        usuarios.forEach(user => {
            text+=`
            
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${user.email}</h6>
                    <p class="card-text">This user lives in ${user.address.city}.</p>
                </div>
            </div><br>
                ` 
        });
        datos.innerHTML=text;
    });
})