const btnShow = document.getElementById("btnShow");
const select = document.getElementById("select");

btnShow.addEventListener("click", ()=>{    
    btnShow.classList.toggle("btn-primary");
    btnShow.classList.toggle("btn-secondary");
    
    let mnuUsers=document.getElementById("select");
    let opcs = "";

    fetch('https://jsonplaceholder.typicode.com/users')
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
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${select.value}`)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
                opcs += 
                `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${post.title}</h5>
                    <p class="card-text">${post.body}.</p>
                    <button onclick="window.cargarComments(${post.id})" type="button"  class="btn btn-primary" id="btnComments${post.id}" >Comments</button> <br>
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

    if (divComments.innerHTML.trim() !== "") {
        divComments.innerHTML = "";
        return;
    }

    let opc="";

    opc += `
    <form action="" method ="post">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <input id="tittle${postId}" placeholder="Title"><br><br>
                <input id="body${postId}" placeholder="Body"><br><br>
                <button onclick="window.publicarComentario(${postId})" 
                type="button" class="btn btn-primary">Post</button>
            </div>
        </div><br>
    </form>
    `;

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
            });

            divComments.innerHTML=opc;
        });
}


window.publicarComentario = function(postId){

    const tittle = document.getElementById(`tittle${postId}`).value;
    const body = document.getElementById(`body${postId}`).value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: tittle,
            body: body,
            userId: postId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

