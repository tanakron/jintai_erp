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

var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

// Import Router backend.js
const adminRouter = require("./routes/admin");
// Import Router frontend.js
const usersRouter = require("./routes/users");

// Import EJS Layout
var expressLayouts = require("express-ejs-layouts");

// Create express object
const app = express();

// กำหนด Folder สำหรับบอกตัว express ว่าไฟล์ css , images อยู่ path ไหน
app.use(express.static("assets"));

// กำหนด Template Engine
app.use(expressLayouts);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
//กำหนดค่ารับparamiter โพส
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
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
app.set('port', process.env.PORT || 3000);