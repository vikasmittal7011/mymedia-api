const multer = require("multer");
const { v1: uuidv1 } = require("uuid");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const fileUpload = multer({
  limits: 2022830,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "upload/images/");
    },
    filename: (req, file, cb) => {
      console.log(file);
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, uuidv1() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    const error = isValid ? null : new Error("Wrong file type!");
    cb(error, isValid);
  },
});

module.exports = fileUpload;
