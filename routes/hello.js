var express = require('express');
var router = express.Router();

resp = {
  "hello": ""
};

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  resp.hello = req.param("name");
  res.send(resp);
});

module.exports = router;