const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    mytask : String,
    done : {
        type : Boolean,
        default: false
    }
})

const todomodel = mongoose.model("mytask", todoSchema)
module.exports = todomodel;