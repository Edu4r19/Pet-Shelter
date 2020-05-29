const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/PetShelter", {useNewUrlParser: true})

var PetSchema = new mongoose.Schema({
    name: {type:String, unique:[true,"Pet's Name is already in use"] , required:[true,"Pet's name is required"], minlength:[3,"Name needs to be at least 3 characters long"]},
    type: {type:String, required:[true,"Pet's type must be specified"], minlength:[3,"Type needs to be at least 3 characters long"]},
    description: {type:String, minlength:[3,"Description needs to be at least 3 characters long"]},
    skills: [{type:String}],
    likes: {type:Number, default:0}
}, {timestamps:true});

module.exports = {
    Pet: mongoose.model('Pet', PetSchema)
}
