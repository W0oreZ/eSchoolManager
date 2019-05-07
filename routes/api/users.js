const express = require('express');

const router = express.Router();

//@ Route   GET api/users/test
//@ Desc    test route
//@ Access  Public
router.get('/test', (req, res) => {
  res.json({
    message: "Users Route Working"
  })
})

module.exports = router;