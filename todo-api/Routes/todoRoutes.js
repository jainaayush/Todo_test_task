const express =require('express')
const router =express.Router()
const TodoController =require('../Controller/todoController')

router.get('/all',TodoController.displayAll)
router.post('/insert',TodoController.insert)
router.post('/update',TodoController.update)
router.post('/remove',TodoController.remove)


module.exports = router