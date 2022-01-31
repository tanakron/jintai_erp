const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://adminjtw:123456@localhost:27017";
var _db;
var dbname = "admin";
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
