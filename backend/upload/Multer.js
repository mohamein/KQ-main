import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'images');
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
export default upload;
