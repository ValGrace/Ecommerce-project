var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body.Body)

  let message = {
    "ResultCode": 0,
    "ResultDesc": "Success"
  }

  res.json(message)
  return res
});

module.exports = router;
