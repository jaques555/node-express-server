const mongoose = require('mongoose');


const utenteSchema = new mongoose.Schema({
   
     nome: String,
     cognome: String

},{collection: 'users'});

module.exports = mongoose.model('users',utenteSchema);