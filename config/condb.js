const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/erp_hr";
var _db;
var dbname = "erp_hr";
const connectDb = (callback) => {
  if (_db) return callback();
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, clinet) {
    if (err) return console.log(err);
    _db = clinet.db(dbname);
    console.log("Database Connected");
    callback();
  });
};
const getDb = () => _db;

module.exports = {
  connectDb,
  getDb,
};
