const btnPost = document.getElementById("btnPost");
btnPost = document.addEventListener("click", () =>{
    const inputTittle = document.getElementById("tittle");
    const inputBody = document.getElementById("body");

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    
});