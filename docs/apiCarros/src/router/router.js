import express from 'express'
import { listCarros, carro, delCarro, agregarCarro} from "../controllers/constroller.js"

const router = express.Router();

router.get('/carros', listCarros);
router.post('/carros', agregarCarro);
router.get('/carros/:id', carro);
router.delete('/carros/:id', delCarro);


export default router