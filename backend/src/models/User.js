const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    role: {type: Number,default: 1},
    name: String,
    idade: Number,
    email: String,
    imageUrl: String,
    password: String,
    created_at: {type: Date,default: Date.now}
})

const User = mongoose.model('user',UserSchema)

module.export= User;