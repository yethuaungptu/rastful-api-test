var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add', function(req, res, next) {
  res.json({msg:'please enter user field',fields_name:'name,phone,job,email,password'})
});

module.exports = router;
