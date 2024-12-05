const mongoose = require('mongoose');

const blogSchema =  mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    },
    {timestamps:true,versionKey:false}
);

const BlogModel= mongoose.model('Blog',blogSchema)
module.exports=BlogModel