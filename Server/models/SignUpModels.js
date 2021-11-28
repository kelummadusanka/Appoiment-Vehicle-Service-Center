const mongoose = require('mongoose')
const signupTemplate = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    address1: {
        type: String,
        required: true
    },

    city: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    Date: {
        type: Date,
        default: Date.now
    },
    profilePhoto: {
        type: String,
        default:"/images/userProfile.png"
    },
    role: {
        type: String,
        default:"customer"
    }


});

module.exports = mongoose.model('customer', signupTemplate)