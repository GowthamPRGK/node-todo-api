var {mongoose} = require('./../db/mongoose');


var User = new mongoose.model('User',{
    email:{
        type: String,
        required: true,
        trim: true,
        minlength: 4
    }
});

module.exports = {
    User
};