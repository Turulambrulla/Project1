const uuid = require('uuid')
const path = require('path')
const {Part, Part_info} = require('../Models/models')
const ApiError = require('../Errors/apiError')


class PartController{
    async create(req,res, next) {
        try{

        let {name, price, brandId, autoId, info} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'Static', fileName))

        const part = await Part.create({name, price, brandId, autoId, img: fileName})

        if (info) {
            info = JSON.parse(info)
            info.forEach(i =>
                Part_info.create({
                    title: i.title,
                    description: i.description,
                    partId: part.id
                })
                )
        }

        return res.json(part)
        } catch (e) {
            next(ApiError.badRequest(e.message))       
        }
    }
    async getAll(req,res) {
        let {brandId, autoId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let parts;
        if(!brandId && !autoId) {
            parts = await Part.findAndCountAll({limit, offset})
        }
        if(brandId && !autoId) {
            parts = await Part.findAndCountAll({where:{brandId}, limit, offset})
        }
        if(!brandId && autoId) {
            parts = await Part.findAndCountAll({where:{autoIid}, limit, offset})
        }
        if(brandId && autoId) {
            parts = await Part.findAndCountAll({where:{brandId, autoId}, limit, offset})
        }
        return res.json(parts)
    }
    async getOne(req,res) {
        const {id} = req.params
        const part = await Part.findOne(
            {
                where: {id},
                include: [{model: Part_info, as: 'info'}]
            },

        )
        return res.json(part)
    }
}

module.exports = new PartController()