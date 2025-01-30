const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false, 
    },
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        default: ['user'],
    },
    profile: ProfileSchema,
    lastLogin: {
        type: Date,
        default: null,
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
