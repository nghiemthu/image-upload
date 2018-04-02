var express         = require("express"), 
    app             = express(),
    multer          = require("multer"),
    cookieParser    = require("cookie-parser"),
    mongoose        = require("mongoose"),
    MongoClient     = require('mongodb').MongoClient,
    fs              = require("fs"),
    assert          = require("assert"),
    Image           = require("./models/image");
    bodyParser      = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json());

app.set('view engine', 'ejs');
mongoose.connect("mongodb://thu:123456@ds123029.mlab.com:23029/gallery", { useMongoClient: true });

app.use(express.static('public'));

// Require Router
var galleryRoutes      = require("./routes/gallery");

app.get('/', (req, res) => {
  res.render('index');
});

app.use("", galleryRoutes);

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
});
var upload = multer({storage: storage});

app.post('/fileUpload', upload.any(), (req, res, next) => {
  MongoClient.connect("mongodb://thu:123456@ds123029.mlab.com:23029/gallery", (err, db) => {
      if (err)
        console.log(err);
      else {
        insertDocuments(db, 'public/images/uploads/' + req.files[0].fieldname, () => {
          db.close();
          res.json({'message': 'File uploaded successfully'});
        });
      }
  });
});

var insertDocuments = function(db, filePath, callback) {
  var collection = db.collection('gallery');
  collection.insertOne({'imagePath' : filePath }, (err, result) => {
    if (err)
      console.log(err);
    else {
      callback(result);
    }
  });
}

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen('8080', function(){
    console.log('Server started');
})