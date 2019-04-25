const db = require('mongoose')

const Schema = {
    Link: String,
    Thumb: String,
    Name: String,
    Igid:{
        type: String,
        unique: true
    },
    Topic: String,
    Displayed: Boolean
}

const Model = db.model('Image', Schema)

module.exports = {Model, Schema}
