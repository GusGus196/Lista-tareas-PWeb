class Alumno{
    constructor(numCuenta, nombre){
        this.numCuenta = numCuenta;
        this.nombre = nombre;
    }
}

class Grupo{
    constructor(){
        this.alumnos = [];
    }

    agregar(alumno){
        if(this.alumnos.length == 0){
            this.alumnos[0] = alumno;
        } else{
            this.alumnos[this.alumnos.length] = alumno;
        }
    }

    buscar(id){
        for(let i = 0; i <= this.alumnos.length; i++){
            if(this.alumnos[i].numCuenta == id){
                return this.alumnos[i];
            }
        }
    }

    eliminar(id){
        let posicion = -1;
        for(let i = 0; i < this.alumnos.length; i++){
            if(this.alumnos[i].numCuenta == id){
               posicion = i;
               break;
            }
        }
        if(posicion !== -1){
            this.alumnos.splice(posicion, 1);
        }
    }
}

export const grupo = new Grupo();
let alumno = new Alumno(20216763, "Gustavo");
grupo.agregar(alumno);
alumno = new Alumno(20216764, "David");
grupo.agregar(alumno);
alumno = new Alumno(20216765, "Angel");
grupo.agregar(alumno);