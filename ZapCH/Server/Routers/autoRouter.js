const Router = require('express')
const router = new Router()
const autoController = require('../Controllers/autoController')
const checkRole = require('../Middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), autoController.create)
router.get('/', autoController.getAll)

module.exports = router