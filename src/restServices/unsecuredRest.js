const express = require('express');
const router = express.Router();
const users = require('../models/users');


router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.get('/users', (req, res) => {

    users.find(function(err, creds) {

        if (err) return console.error(err);

        res.json(creds);

    });


}, err => {

    console.log(err);
});


router.post('/user', (req, res) => {
   
    new users({nome:req.body.nome, cognome:req.body.cognome}).save(function(err, data) {

        if(err)
            res.json({codeError:-1})
        else  
          res.json({codeError:0})
    });


}, err => {

    console.log(err);
});

router.delete('/user', (req, res) =>{

   console.log(req.body);
   users.deleteOne({_id:req.body.id},function(err,resp ) {
        if (err) 
            res.json({codeError:-1})
        else  
          res.json({codeError:0})

    });
});

module.exports = router;    