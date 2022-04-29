const Router = require('express')
const router = new Router()

const autoRouter = require('./autoRouter')
const brandRouter = require('./brandRouter')
const partRouter = require('./partRouter')
const userRouter = require('./userRouter')

router.use('/auto', autoRouter)
router.use('/brand', brandRouter)
router.use('/part', partRouter)
router.use('/user', userRouter)

module.exports = router