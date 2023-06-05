// require mongoose
// from mongoose we use a method which is Schema(this defines the structure of the doc we would store in a collection its the thin that wraps around, note rhe S in Schema is capitalized)


const mongoose = require('mongoose')
const Schema = mongoose.Schema
const traineeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true
    }
}, {timestamps:true})

// let creat our model(model is what surrounds the Schema and provides us with an interface by which to coomuncate with our DB)


const Trainees = mongoose.model('Trainee', traineeSchema)

module.exports = Trainees