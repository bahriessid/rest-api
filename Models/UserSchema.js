const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname:{
        type: String,
        required:[true, 'please type your name !!' ]
    },
    lname: String,
    age: Number,
    town: String
})

module.exports = mongoose.model('User', UserSchema)