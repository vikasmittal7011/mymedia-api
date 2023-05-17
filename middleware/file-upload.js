const multer = require("multer");
const { v1: uuidv1 } = require("uuid");

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};

console.log(uuidv1());
const fileUpload = multer({
  limits: 50000,
  Storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cd(null, "upload/images");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      cd(null, uuidv1() + "." + ext);
    },
  }),
  fileFilter: (req, file, cd) => {
    const isValid = !!MIME_TYPE_MAP[file.mimetype];
    const err = isValid ? null : new Error("Wrong min type!!");
    cd(err, isValid);
  },
});

module.exports = fileUpload;
