const multer  = require('multer')
const maxSize = 10 * 1024 * 1024;

// SET STORAGE
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname.toLowerCase().split(' ').join('-') + '-' + uniqueSuffix + '.' + file.mimetype.replaceAll('/', '.'))
  }
})

let uploadImage = multer({
  storage: imageStorage,
  limits:{fileSize: maxSize},
});

module.exports = {
  uploadImage
}