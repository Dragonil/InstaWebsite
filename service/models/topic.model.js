const db = require('mongoose')

const Schema = {
    Title: String,
    Tag:{
        type: String,
        unique: true
    },
    Image: String,
    Displayed: Boolean
}

const Model = db.model('Topic', Schema)

module.exports = {Model, Schema}