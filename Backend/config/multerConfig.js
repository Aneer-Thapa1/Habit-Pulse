const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const allowedFileTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/svg+xml",
      "image/webp",
    ];
    if (!allowedFileTypes.includes(file.mimetype)) {
      cb(new Error("This filetype is not supported"));
      return;
    }

    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

module.exports = {
  multer,
  storage,
};
