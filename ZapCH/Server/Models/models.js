const sequelize = require('../db.js')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Part = sequelize.define('part',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    brand: {type: DataTypes.STRING, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Part_info = sequelize.define('part_info',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
})

const Auto = sequelize.define('auto',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    mark: {type: DataTypes.STRING, unique: true, allowNull: false},
    model: {type: DataTypes.STRING, allowNull: false},
    year: {type: DataTypes.INTEGER, allowNull: false},
    dvs: {type: DataTypes.STRING, allowNull: false},
})

const AutoParts = sequelize.define('auto_parts',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

Auto.belongsToMany(Part, {through:AutoParts})
Part.belongsToMany(Auto, {through:AutoParts})

Part.hasMany(Part_info, {as:'info'})
Part_info.belongsTo(Part)

module.exports = {
    User, Part, Part_info, Auto, AutoParts
}