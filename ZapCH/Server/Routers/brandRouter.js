const Router = require('express')
const router = new Router()
const brandController = require('../Controllers/brandController')
const checkRole = require('../Middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router