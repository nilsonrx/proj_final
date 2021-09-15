const express = require('express')

const listaControllers = require('../controllers/listaControllers')

const router = express.Router()

router.post('/tarefa', listaControllers.createTarefa)
router.put('/tarefa/:id', listaControllers.updateTarefa)
router.delete('/tarefa/:id', listaControllers.deleteTarefa)
router.get('/tarefa/:id', listaControllers.getTarefaById)
router.get('/tarefas', listaControllers.getTarefas)

module.exports = router