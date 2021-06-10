const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const fs = require('fs');
const Account = require('../models/account');



router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.post('/', async (req, res) => {

    console.log(req.body.username);
    console.log(req.body.password);

    try {

      const accounts = await Account.find();
      console.log('mongo:'+accounts);

    }catch(err) {
         res.json({message:err.message})
    }
  /*   const rawdata = fs.readFileSync('assets/config.json');
    const user = JSON.parse(rawdata);
    console.log(user);
    if(req.body.username === user.username && req.body.password === user.password) {
      jwt.sign({user:user},RSA_PRIVATE_KEY,(err, token) =>{
         console.log('****'+token+'*****')
         res.json({token});
      });
    }
       
    else
       res.json({code:"-1", description:"Login Fallito!!!"}); */
  });
   
  module.exports = router;