import express from 'express'
import { alumnos, alumno, delAlumno} from "../controllers/constroller.js"

const router = express.Router();

router.get('/alumnos', alumnos);
router.get('/alumnos/:id', alumno);
router.delete('/alumnos/:id', delAlumno);


export default router