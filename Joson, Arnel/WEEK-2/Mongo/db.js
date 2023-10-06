const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://asjoson:test1234@cluster0.gsg7kdz.mongodb.net/'
// "mongodb://127.0.0.1:27017/bookstore"
module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(uri)
      .then(client => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}