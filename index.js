var express = require("express");
var app = express();
var multer = require("multer");

app.listen(3000, function () {
    console.log("ket noi thanh cong");
})

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname
        )
    }
})
var upload = multer({ storage: storage })
app.post('/', upload.single('file'), function (req, res, next) {
    console.log(res.file);
    res.send("upload file thanh cong")
  })
  
app.set("view engine", "ejs");
app.set("views", "./view")
app.get("/", function (req, res) {
    res.render("form");
})
