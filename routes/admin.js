// Import Express
const express = require("express");

// Import OjectID ของ MongoDB
const objectId = require("mongodb").ObjectId;
//Connect DB
//  import mongodb condb
const {
  connectDb,
  getDb
} = require("../config/condb");
connectDb(() => (db = getDb()));
var moment = require("moment");
require("twix");
// moment-business-days
// var moment = require('moment-business-days');
// var db = require("monk")("localhost:27017/LoginDB");
const router = express.Router();
var moment = require("moment");

//  ==========   start  ========== //

router.get("", (req, res) => {
  res.render("pages/backend/dashbord", {
    title: "หน้าหลัก Admin",
    heading: "Backendadmin",
    layout: "./layouts/adminbackend",
  });
});

router.get("/emp_creatposition", async (req, res) => {
  const emp_users = await db.collection("emp_users").find({}).toArray();
  // res.json(emp_users);
  res.render("pages/backend/emp_creatposition", {
    title: "หน้าสร้างรายชื่อพนักงาน",
    heading: "Backendadmin",
    layout: "./layouts/adminbackend",
    data: emp_users,
    moment: moment,
  });
});

router.get("/admin_hr", async (req, res) => {
  const admin_hr = await db.collection("admin_hr").find({}).toArray();
  // res.json(admin_hr);
  res.render("pages/backend/admin_hr", {
    title: "admin_hr",
    heading: "admin_hr",
    layout: "./layouts/adminbackend",
    data: admin_hr,
    moment: moment,
  });
});

router.get("/create_hr", (req, res) => {
  res.render("pages/backend/create_hr", {
    title: "หน้าหลัก Admin",
    heading: "Backendadmin",
    layout: "./layouts/adminbackend",
  });
});


// ----------------position------------------------//

// ----------------View kpi ------------------------//
router.get("/kpi_empuser/", async (req, res) => {
  const kpi_empuser = await db.collection("kpi_from").find({}).toArray();
  res.json(kpi_empuser);
});
// ----------------------------------------//
// ---------  KPI COUNT -----------------//
router.get("/kpi_count/", async (req, res) => {
  const kpi_count = await db.collection("kpi_from").countDocuments();
  let kpi_counts = JSON.stringify(kpi_count);
  res.json(kpi_counts);
res.end
});


// ----------------Insert kpi ------------------------/
router.post("/kpi_from", async (req, res) => {
  let emp_id = req.body.emp_id;
  let kpi_name = req.body.kpi_name;
  let kpi_department = req.body.kpi_department;
  let kpi_beunder = req.body.kpi_beunder;
  let kpi_subject = req.body.kpi_subject;
  let kpi_dateend = req.body.kpi_dateend;
  let kpi_datenow = req.body.kpi_datenow;
  let kpi_documentnumber = req.body.kpi_documentnumber;
  let = req.body.isActive;
  // console.log(emp_id + kpi_name + kpi_department + kpi_beunder + kpi_subject + kpi_dateend + kpi_datenow  + kpi_documentnumber + isActive) 
  await db.collection("kpi_from").insertOne({
    emp_id: parseInt(emp_id),
    kpi_name: kpi_name,
    kpi_department: kpi_department,
    kpi_beunder: kpi_beunder,
    kpi_subject: kpi_subject,
    kpi_dateend: kpi_dateend,
    kpi_datenow: kpi_datenow,
    kpi_documentnumber: parseInt(kpi_documentnumber),
    isActive: true,
  });
  res.end();
})







// ----------------View allusers ------------------------//

// ----------------------------------------//


router.get("/view_useremp/:id", async (req, res, next) => {
  const emp_allusers = await db.collection("emp_usersall").find({}).toArray();

  console.log(emp_allusers);
});
router.get("/emp_allusers/", async (req, res) => {
  const emp_allusers = await db.collection("emp_usersall").find({}).toArray();
  res.json(emp_allusers);
});
router.get("/emp_alluserscconut/", async (req, res) => {

  const emp_count = await db.collection("emp_usersall").countDocuments();
  let usercount = JSON.stringify(emp_count);
  res.json(usercount);
  res.end

  // res.json(moment);
  // console.log(emp_img);
  // res.render("pages/backend/emp_allusers", {
  //   title: "หน้าสร้างรายชื่อพนักงาน",
  //   heading: "Backendadmin",
  //   layout: "./layouts/adminbackend",
  //   data: emp_allusers,
  //   moment: moment,
  // });
});
// จำกัด 10 รายการ
router.get("/emp_alluserstenshow/", async (req, res) => {
  const emp_allusers = await db.collection("emp_usersall").find({}).limit(10).toArray();
  res.json(emp_allusers);
  res.end
});
// DELETE position
router.delete("/emp_delete_position/:id/:resource", async (req, res) => {
  const objID = new objectId(req.params.id);
  await db.collection("emp_usersall").deleteOne({
    _id: objID
  });
  // console.log(objID)
  res.redirect("/admin/emp_allusers");
});

// ----------------------------------------//

// // update a user in the database
// router.put('/emp_view_position/:id',function(req,res,next){
//     User.findOneAndUpdate({_id: req.params.id},req.body).then(function(){
//         User.findOne({_id: req.params.id}).then(function(user){
//             res.send(user)
//         })
//     })
// })

// delete a user in the database

// --------insert data empuser------------//
router.post('/forminsert', async (req, res) => {
  let emp_type = req.body.emp_type;
  let emp_id = req.body.emp_id;
  let emp_fullname = req.body.emp_fullname;
  let emp_start = req.body.emp_start;
  let emp_bithday = req.body.emp_bithday;
  let emp_status = req.body.emp_status;
  let emp_url = req.body.emp_url;
  // console.log(emp_type + emp_id + emp_fullname +emp_start + emp_bithday + emp_status + emp_url);
  await db.collection("emp_usersall").insertOne({
    emp_type: parseInt(emp_type),
    emp_id: parseInt(emp_id),
    emp_fullname: emp_fullname,
    emp_start: emp_start,
    emp_bithday: emp_bithday,
    emp_status: parseInt(emp_status),
    emp_url: emp_url,
    createdateDate: new Date(),
  });
  res.end();

});
router.get("/emp_allusers_updatenew", async (req, res) => {
  const emp_allusers_updatenew = await db.collection("emp_usersall").find().sort({
    '_id': -1
  }).limit(1).toArray();
  res.json(emp_allusers_updatenew);
  // console.log(emp_allusers_updatenew)
});


// ----------------------------------------//
// การ insert data
router.post("/create_hr", async (req, res) => {
  let hr_id = req.body.hr_id;
  let name_hr = req.body.name_hr;
  let lastname_hr = req.body.lastname_hr;
  let level = req.body.level;
  let password = req.body.password;
  // console.log(hr_id + name_hr + lastname_hr + level + password);
  await db.collection("admin_hr").insertOne({
    hr_id: parseInt(hr_id),
    name_hr: name_hr,
    lastname_hr: lastname_hr,
    level: parseInt(level),
    password: password,
    createdateDate: new Date(),
  });
  res.render("pages/backend/create_hr", {
    title: "หน้า กรอกข้อมูลพนักงาน",
    heading: "Backendadmin",
    layout: "./layouts/adminbackend",
  });
});

// การ insert data
router.post("/insert_position", async (req, res) => {
  let emp_id = req.body.emp_id;
  let emp_type = req.body.emp_type;
  let emp_name = req.body.emp_name;
  let emp_lastname = req.body.emp_lastname;
  let emp_gender = req.body.emp_gender;
  let emp_birthday = req.body.emp_birthday;
  let emp_datein = req.body.emp_datein;
  let emp_dateout = req.body.emp_dateout;
  let emp_status = req.body.emp_status;
  let emp_salary = req.body.emp_salary;
  let emp_extra = req.body.emp_extra;
  // console.log(hr_id + name_hr + lastname_hr + level + password);
  await db.collection("emp_users").insertOne({
    emp_id: emp_id,
    emp_type: emp_type,
    emp_name: emp_name,
    emp_lastname: emp_lastname,
    emp_gender: emp_gender,
    emp_birthday: parseInt(emp_birthday),
    emp_datein: emp_datein,
    emp_dateout: emp_dateout,
    emp_status: parseInt(emp_status),
    emp_salary: parseInt(emp_salary),
    emp_extra: emp_extra,
    createdateDate: new Date(),
  });
  res.render("pages/backend/emp_creatposition", {
    title: "หน้าหลัก Admin",
    heading: "Backendadmin",
    layout: "./layouts/adminbackend",
  });
});

// router.post("/create_hr", (req, res) => {});

// router.get("/emp_creatposition", async (req, res) => {
//   const admin_hr = await db.collection("admin_hr").find({}).toArray();
//   // res.json(admin_hr);
// });
// router.get("/emp_creatposition", function (req, res, next) {
//   var users = db.get("emp_users");
//   users.find({}, {}, function (err, usersemp) {
//     res.render("pages/backend/emp_creatposition", {
//       postsuser: usersemp,
//       moment: moment,
//       title: "creatposition",
//       layout: "./layouts/adminbackend",
//     });
//   });
// // });
// router.post("/emp_creatposition", function (req, res, next) {
//   if (!Result.isEmpty()) {
//   } else {
//     posts.insert(
//       {
//         title: req.body.title,
//         title: req.body.title,
//         title: req.body.title,
//         title: req.body.title,
//         date: new Date(),
//       },
//       function (err, success) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.location("/");
//           res.redirect("/");
//         }
//       }
//     );
//   }
// });

// router.post(
//   "/emp_creatposition",
//   [
//     check("emp_id", "กรุณาป้อนชื่อบทความ").not().isEmpty(),
//     check("emp_type", "กรุณาป้อนเนื้อหา").not().isEmpty(),
//     check("emp_name", "กรุณาใส่ภาพปก").not().isEmpty(),
//     check("emp_lastname", "กรุณาใส่ภาพปก").not().isEmpty(),
//     check("emp_gender", "กรุณาใส่ภาพปก").not().isEmpty(),
//     check("emp_birthday", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_datein", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_dateout", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_status", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_salary", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//     check("emp_extra", "กรุณาป้อนชื่อผู้เขียน").not().isEmpty(),
//   ],

//     posts.insert(
//       {
//         emp_id: req.body.emp_id,
//         emp_type: req.body.emp_type,
//         emp_name: req.body.emp_name,
//         emp_lastname: req.body.emp_lastname,
//         emp_gender: req.body.emp_gender,
//         emp_birthday: req.body.emp_birthday,
//         emp_datein: req.body.emp_datein,
//         emp_dateout: req.body.emp_dateout,
//         emp_status: req.body.emp_status,
//         emp_salary: req.body.emp_salary,
//         emp_extra: req.body.emp_extra,
//         date: new Date(),
//       },
//       function (err, success) {
//         if (err) {
//           res.send(err);
//         } else {
//           res.location("/");
//           res.redirect("/");
//         }
//       }
//     );
//   }
// );

module.exports = router;