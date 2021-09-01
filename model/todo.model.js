const mongoose = require("mongoose");
const {Schema} = mongoose;
const {Types} = Schema;


const todoSchema = new Schema({
    title: {type:Types.String, required: true,trim: true},
    description:{type:Types.String,trim: true},
    is_complited: {type:Types.Boolean,default: false}
},{timestamps: true});

module.exports = mongoose.model("todo", todoSchema);