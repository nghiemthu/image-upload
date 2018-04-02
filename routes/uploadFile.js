var express     = require("express");
var router      = express.Router();
var multer      = require("multer");
var fileFolder  = '../public/images/uploads';
var fs          = require('fs');

var File       = require("../models/file");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname.split(' ').join('_'))
  }
});

var upload = multer({storage: storage});

router.post('/fileUpload', upload.any(), (req, res) => { 
  File.findOneAndUpdate(
    { imagePath : `/images/uploads/${req.files[0].originalname.split(' ').join('_')}` }, 
    {},
    { upsert: true},
    (err) => {
      if (err)
        console.log(err);
      else {
        res.json({ message: 'File uploaded successfully' });
      }
  });
});

router.get('/files', (req, res) => { 
  File.find({}, (err, files) => {
    if (err)
      console.log(err);
    else {
      res.json(files);
    }
  });
});

module.exports = router;