var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
var data = require('../react-client/src/components/data.js')

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

var peopleSchema = mongoose.Schema({
  Name: String,
  Country: String,
  Email: String,
  Date: String
})

var blogShema = mongoose.Schema({
  text: String
})


var Blog =  mongoose.model('Blog', blogShema);
var People = mongoose.model('People', peopleSchema);
var User = mongoose.model('User', userSchema);

People.create(data);

var selectAll = function(callback) {
  User.find({}, function(err, user) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, user);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.User = User;
module.exports.People = People;
module.exports.Blog = Blog;
