const mongoose = require('mongoose');

const userSchema =  mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String }, // Optional
    },
    {timestamps:true,versionKey:false}
);

const UserModel=mongoose.model('Users',userSchema)
module.exports=UserModel



