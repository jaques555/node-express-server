const express = require('express');
const app = express();
const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv/config')
RSA_PRIVATE_KEY = fs.readFileSync('security/id_rsa');
const userRest = require('./restServices/userRest');
const securedRest = require('./restServices/securedRest');
const unsecuredRest = require('./restServices/unsecuredRest');




app.use('/login', userRest);
app.use('/secured', securedRest);
app.use('/unsecured', unsecuredRest);

mongoose.connect(process.env.DB_MONGO_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true },()=>
console.log('Connesso al DB!'));

app.listen(3000, () => console.log('Server is UP and app is listening on port 3000.'));