const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const User = mongoose.Schema({
    googleId: {
      type: String  
    },
    facebookId: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    image:{
       type: String 
    } 
    
})

User.plugin(findOrCreate)

module.exports = mongoose.model( `User`, User);