const express = require('express');

const router = express.Router();

//@ Route   GET api/modules/test
//@ Desc    test route
//@ Access  Public
router.get('/test', (req, res) => {
  res.json({
    message: "Modules Route Working"
  })
})

module.exports = router;