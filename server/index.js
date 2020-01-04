var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var User = require('../database-mongo').User;
var People = require('../database-mongo').People
var Blog = require('../database-mongo').Blog;
var data = require('../react-client/src/components/data.js')
var app = express();

app.use(bodyParser())
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/signup', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  User.findOne({username}, (err, result) => {
    if (result) {
      res.json({
        user: true
      })
    } else {
      bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
          console.log(hash)
        } else {
          var user = new User({
            username: username,
            password: hash
          })
          user.save((err) => {
            if (err) throw err;
            res.send({
              saved: true
            })
          })
        }
      });
    }
  })
});

app.post('/signin', (req, res, next) => {
  var username = req.body.username;

  User.findOne({ username }, (err, user) => {
    bcrypt.compare(req.body.password, user.password, (err, match) => {
      res.json( { match } )
    })
  })
})

app.post('/blog', (req, res, next) => {
  console.log(req.body.value)
  var newBlog = new Blog({
    text: req.body.value
  })
  newBlog.save()
  next()
})

app.get('/blog', (req, res, next) => {
  Blog.find().limit(20).then(result => {
    res.send(result)
  })
})

app.get('/home', (req, res, next) => {
  People.find().limit(20).then(result => {
    res.send(result)
  })
})


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

