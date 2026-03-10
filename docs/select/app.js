const btnShow = document.getElementById("btnShow");
const select = document.getElementById("select");

btnShow.addEventListener("click", ()=>{    
    btnShow.classList.toggle("btn-primary");
    btnShow.classList.toggle("btn-secondary");
    
    let mnuUsers=document.getElementById("select");
    let opcs = "";

    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usuarios => {
        usuarios.forEach(user => {
            opcs += `<option value="${user.id}">${user.name}</option>`
        });
        mnuUsers.innerHTML=opcs;
    });
})


select.addEventListener("change", () => {
    const divPosts = document.getElementById("posts");
    let opcs = "";
    fetch(`http://jsonplaceholder.typicode.com/posts?userId=${select.value}`)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
                opcs += 
                `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}.</p>
                    <button onclick="window.cargarComments(${post.id})" type="button"  class="btn btn-primary" id="btnComments${post.id}" >Show comments</button> <br>
                    <div id="divComments${post.id}"></div>
                </div>
            </div><br>`;

            
            divPosts.innerHTML=opcs;
        });

    });
    console.log(select.value);
});

window.cargarComments = async function(postId) {
    const divComments = document.getElementById(`divComments${postId}`);

    let opc="";

    fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then (comments => {
            comments.forEach(comment => {
                opc += 
                `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${comment.name}</h5>
                    <p class="card-text">${comment.body}.</p>
                </div>
            </div><br>`;

            divComments.innerHTML=opc;
        });
    });
}