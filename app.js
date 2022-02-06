// Import Express
const express = require("express");
var createError = require("http-errors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bcrypt = require("bcryptjs");
var path = require("path");
var mongo = require("mongodb");
var mongoose = require("mongoose");
var db = mongoose.connection;
const bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var cors = require("cors");

// Import Method Override
const methodOverride = require("method-override");
// Import Router backend.js
const adminRouter = require("./routes/admin");
// Import Router frontend.js
const usersRouter = require("./routes/users");

// Import EJS Layout
var expressLayouts = require("express-ejs-layouts");

// Create express object
const app = express();
const paginate = require("express-paginate");
app.use(paginate.middleware(10, 50));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// กำหนด Template Engine
app.use(expressLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css , images อยู่ path ไหน
app.use(express.static("assets"));
app.use(logger("dev"));
//กำหนดค่ารับparamiter โพส
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// / เรียกใช้ Method Override
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

var corsOptions = {
  origin: "http://localhost:8080/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(passport.initialize());
app.use(passport.session());

app.use(require("connect-flash")());

app.use(function (req, res, next) {
  res.locals.messages = require("express-messages")(req, res);
  next();
});

app.get("*", function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

app.set("layout", "./layouts/frontend");

// เรียกใช้งาน Routes
app.use("/users", usersRouter);

app.use("/admin", adminRouter);
// Run Express Server ที่ Port 5000
app.listen(3000, () => {
  console.log("Server run at port 3000");
});
module.exports = app;
app.set("port", process.env.PORT || 3000);
