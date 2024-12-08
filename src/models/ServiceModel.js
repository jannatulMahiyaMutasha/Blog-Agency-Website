const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },

    },
    {timestamps:true,versionKey:false}
);

const ServiceModel= mongoose.model('Service',serviceSchema)
module.exports=ServiceModel