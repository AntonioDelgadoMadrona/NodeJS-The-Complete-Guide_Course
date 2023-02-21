const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    `mongodb+srv://ToniiDeep:Toniideep5.@cluster0.6ekzjfo.mongodb.net/shop?retryWrites=true&w=majority`
  )
    .then((client) => {
      console.log("Connected!");
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (!_db) {
    throw "No database found!";
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
