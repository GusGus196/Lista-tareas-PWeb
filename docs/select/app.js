const btnShow = document.getElementById("btnShow");


btnShow.addEventListener("click", ()=>{    
    btnShow.classList.toggle("btn-primary");
    btnShow.classList.toggle("btn-secondary");
    
    let mnuUsers=document.getElementById("select");
    let opcs = ""

    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usuarios => {
        usuarios.forEach(user => {
            opcs += `<option value="${user.id}">${user.name}</option>`
        });
        mnuUsers.innerHTML=opcs;
    });
})