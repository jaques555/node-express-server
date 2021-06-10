const mongoose = require('mongoose');


const AccountSchema = mongoose.Schema({
   
     username: String,
     nome: String,
     cognome: String,
     password: String,
     role: String


},{collection: 'account'});

module.exports = mongoose.model('Account',AccountSchema);