// Import Express
const express = require("express");

const router = express.Router();

var User = require("../config/configdb");

var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

const { check, validationResult } = require("express-validator");

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/users/login",
    failureFlash: true,
  }),
  function (req, res) {
    req.flash("success", "ลงชื่อเข้าใช้เรียบร้อยแล้ว");
    res.redirect("/");
  }
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.getUserById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(function (empid, password, done) {
    User.getUserByName(empid, function (err, user) {
      if (err) throw error;
      if (!user) {
        return done(null, false);
      } else {
        return done(null, user);
      }
      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) return err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  })
);

router.post(
  "/register",
  [
    check("empid", "กรุณาใส่รหัสพนักงานของท่าน").isEmail(),
    check("password", "กรุณาป้อนรหัสผ่าน").not().isEmpty(),
    check("repassword", "กรุณาป้อนรหัสผ่านอีกครั้งให้ตรงกัน").not().isEmpty(),
  ],
  function (req, res, next) {
    const result = validationResult(req);
    var errors = result.errors;
    //Validation Data
    if (!result.isEmpty()) {
      //Return error to views
      res.render("/register", {
        errors: errors,
      });
    } else {
      //Insert  Data
      var empid = req.body.empid;
      var password = req.body.password;
      var repassword = req.body.repassword;
      var newUser = new User({
        empid: empid,
        password: password,
        repassword: repassword,
      });
      User.createUser(newUser, function (err, user) {
        if (err) throw err;
      });
      res.location("/");
      res.redirect("/");
    }
  }
);

router.get("", (req, res) => {
  res.render("pages/frontend/index", { title: "หน้าหลัก" });
});
router.get("/settings", (req, res) => {
  res.render("pages/frontend/settings", { title: "ตั้งค่า" });
});
router.get("/login", (req, res) => {
  res.render("pages/frontend/login", { title: "เข้าสู่ระบบ" });
});
router.get("/register", (req, res) => {
  res.render("pages/frontend/register", { title: "สมัครสมาชิก" });
});

router.get("/error", (req, res) => {
  res.render("pages/frontend/error", { title: "Error" });
});

router.get("/create_profile", (req, res) => {
  res.render("pages/frontend/create_profile", {
    title: "Create profile",
    heading: "Create profile",
    layout: "./layouts/backend",
  });
});
router.get("/profile", (req, res) => {
  res.render("pages/frontend/profile", {
    title: "Dashbord users",
    heading: "Profile",
    layout: "./layouts/backend",
  });
});
module.exports = router;
