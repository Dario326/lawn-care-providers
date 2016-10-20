const mongoose = require('mongoose');

const Service = mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: String,
        default: 'open'
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    },
    dateOfService: {
        type: Date,    
    },
    yardPhoto: {
        type: String,
    },
    dateAdded: {
        type: Date,
        default: Date();
    },
    typeOfService: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Service', Service);