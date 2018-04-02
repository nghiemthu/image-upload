var express         = require("express"), 
    app             = express(),
    multer          = require("multer"),
    cookieParser    = require("cookie-parser"),
    fs              = require("fs"),
    mongoose        = require("mongoose"),
    MongoClient     = require('mongodb').MongoClient,
    bodyParser      = require("body-parser");

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(require('body-parser').urlencoded({ extended: false }));
app.use(require('body-parser').json({limit: '50mb'}));

app.set('view engine', 'ejs');

app.use(express.static('public'));
mongoose.connect("mongodb://thu:123456@ds123029.mlab.com:23029/gallery", { useMongoClient: true });

// Require Router
var uploadFileRoutes      = require("./routes/uploadFile");

app.get('/', (req, res) => {
  res.render('index');
});

app.use("", uploadFileRoutes);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(process.env.PORT || '8080', process.env.IP, function(){
    console.log('Server started');
})