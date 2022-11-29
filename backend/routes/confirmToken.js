var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(res.body)

  let message = {
    "ResultCode": 0,
    "ResultDesc": "Success"
  }

  res.json(message)
});

module.exports = router;
