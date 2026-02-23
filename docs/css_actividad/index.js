function suma(a, b) {
    if((a + b) == 3 ){
        console.log("Se salio");
    }
    console.log(a + b);
}

let temporizador = setTimeout(suma, 1000, 1, 2);

