import express from 'express'
import { usuarios } from "../controllers/constroller.js"

const router = express.Router();

router.get('/usuarios', usuarios)

router.get('/', (req, res) => {
  res.send('<h1>Hola</h1>')
})

export default router