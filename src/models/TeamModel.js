const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    name: {type: String, required: true},
    role: {type: String, required: true},
    image: {type: String}, // URL for team member's photo
    description: {type: String},
},
     {timestamps:true,versionKey:false}
);

const TeamModel=mongoose.model('Team',teamSchema)
module.exports=TeamModel