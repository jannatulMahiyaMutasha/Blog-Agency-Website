const mongoose = require('mongoose');

const blogSchema =  mongoose.Schema({
    image:{type:String},
    title: { type: String, required: true },
    content: { type: String, required: true },
    },
    {timestamps:true,versionKey:false}
);

const BlogModel= mongoose.model('Blog',blogSchema)
module.exports=BlogModel