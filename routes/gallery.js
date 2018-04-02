var express     = require("express");
var router      = express.Router();

var Gallery       = require("../models/gallery");

// Get Gallery By Id
router.get('/api/gallery', function(req, res) {
  Gallery.find({}).exec(function(err, gallery){
    if (err) console.log(err);
    else {
        res.json(gallery);
    }
  });
});

// Get Gallery By Id
router.get('/api/gallery/:id', function(req, res) {
  Gallery.findById(req.params.id).populate("images").exec(function(err, gallery){
    if (err) console.log(err);
    else {
        res.json(gallery);
    }
  });
});

module.exports = router;