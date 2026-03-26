import { grupo } from "../students.js";


export const alumnos = async(req, res) => {
    console.log(grupo.alumnos);
    res.json(grupo.alumnos);
};

export const alumno = async(req, res) => {
    const { id } = req.params;
    const alumno = grupo.buscar(id);
    res.json(alumno);
};

export const delAlumno = async(req, res) => {
    const { id } = req.params;
    grupo.eliminar(id);
    return res.status(201).json(grupo.alumnos);
};
