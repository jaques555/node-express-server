const express = require('express');
const jwt = require('jsonwebtoken')
const router = express.Router();
const fs = require('fs');



router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.get('/', verifyToken, (req, res) => {
  
    jwt.verify(req.token, RSA_PRIVATE_KEY, (err, authData) => {
    
      if(err) {
          res.sendStatus(401);
      }else {
        res.json({code:"0", description:"Secret info"});
      }
    }); 
    

  });


  function verifyToken(req, res, next) {
      const bearerHeader = req.headers['authorization'];
      console.log(bearerHeader);
      if(typeof bearerHeader !== 'undefined') {
          const bearerToken = bearerHeader.split(' ')[1]
          console.log(bearerToken);
          req.token = bearerToken;
          next();
      }else {
          res.sendStatus(401);
      }
  }
   
  module.exports = router;