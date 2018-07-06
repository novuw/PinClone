
var express = require('express');
var app = express();
var request = require('superagent');
var mongo = require('mongodb').MongoClient;
var path = require('path');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
//https://www.youtube.com/watch?v=kDhYUPcDS28&list=PL4cUxeGkcC9jdm7QX143aMLAqyM-jTZ2x&index=5


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('public'));
passport.use(new GoogleStrategy({
  //options
  clientID: process.env.clientid,
  clientSecret: process.env.secret,
  callbackURL: "https://pinclone.glitch.me/user/signin/callback"
}, ()=> {
  //passport callback function

}));
app.use('/user/signin/callback', passport.authenticate('google', {
  scope:['profile']
}));







app.get('/', function(request, response) {
  response.render('index');
});
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
