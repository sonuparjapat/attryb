const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
   Image:String,
    title:String,
    description: { type: [String], default: [] },
    authorId:String
})
const UserpostModel=mongoose.model("userposts",postSchema)
module.exports={UserpostModel}