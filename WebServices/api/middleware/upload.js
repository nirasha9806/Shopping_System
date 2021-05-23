const path = require('path');
const multer = require('multer');

//set storage engine
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
  },
});

//Init upload
var upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (ext == '.jpg' || ext == '.png') {
      callback(null, true);
    } else {
      console.log('Only jpg and png files are supported!');
      callback(null, false);
    }
  },
});

module.exports = upload;
