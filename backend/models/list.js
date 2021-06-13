const mongoose = require('mongoose')
const {Schema} = mongoose

const listSchema = new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    users:[
        {type:Schema.Types.ObjectId,
        ref:'User'
    }
    ],
})

const List = mongoose.model('List',listSchema)
module.exports = List;