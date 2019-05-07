const express = require('express');

const router = express.Router();

//@ Route   GET api/groupes/test
//@ Desc    test route
//@ Access  Public
router.get('/test', (req, res) => {
  res.json({
    message: "Groupes Route Working"
  })
})

module.exports = router;