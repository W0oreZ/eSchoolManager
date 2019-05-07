const express = require('express');

const router = express.Router();

//@ Route   GET api/students/test
//@ Desc    test route
//@ Access  Public
router.get('/test', (req, res) => {
  res.json({
    message: "students Route Working"
  })
})

module.exports = router;