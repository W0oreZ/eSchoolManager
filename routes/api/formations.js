const express = require('express');

const router = express.Router();

//@ Route   GET api/formations/test
//@ Desc    test route
//@ Access  Public
router.get('/test', (req, res) => {
  res.json({
    message: "formations Route Working"
  })
})


module.exports = router;