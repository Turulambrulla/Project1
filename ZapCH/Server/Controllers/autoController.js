const {Auto} = require('../Models/models')
const ApiError = require('../Errors/apiError')

class AutoController{
    async create(req,res,next) {
        try{
        const {mark, model, year} = req.body
        const auto = await Auto.create({mark, model, year})
        return res.json(auto)
    } catch (e) {
        next(ApiError.badRequest(e.message))       
    }
    }
    async getAll(req,res) {
        const autos = await Auto.findAll()
        return res.json(autos)    
    }
}

module.exports = new AutoController()