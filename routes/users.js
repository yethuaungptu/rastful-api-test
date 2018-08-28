var express = require('express');
var router = express.Router();
var User = require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
  res.json({msg:'please enter user field',fields_name:'name,phone,job,email,password'})
});

router.post('/add',(req,res,next)=>{
  var user = new User();
  user.name = req.body.name;
  user.phone = req.body.phone;
  user.job = req.body.job;
  user.email = req.body.email;
  user.password = req.body.password;

  user.save((err,user)=>{
    if(err) throw err;
    if(user) {
      res.json({msg:'Succefully add',data:user});
    }else{
      res.json({msg:"Some thing was worng"});
    }
  })
})

module.exports = router;
