const Router = require('express')
const router = new Router()
const partController = require('../Controllers/partController')
const checkRole = require('../Middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), partController.create)
router.get('/', partController.getAll)
router.get('/:id',partController.getOne)

module.exports = router