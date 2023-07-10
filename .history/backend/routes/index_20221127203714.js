var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  getDetails(res)
});



const getDetails = (details) => {
  return details
}
module.exports = router;
