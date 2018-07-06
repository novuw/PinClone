
var express = require('express');
var app = express();
var request = require('superagent');
var mongo = require('mongodb').MongoClient;
var path = require('path');
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('public'));


app.get('/', function(request, response) {
  response.render('index');
});
app.use('/user/signin/callback', function(req, res){

});
/*
passport.use(new GitHubStrategy({
    clientID: process.env.clientid,
    clientSecret: process.env.secret,
    callbackURL: "https://pinclone.glitch.me/user/signin/callback"
}, function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
}
));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/index' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });
*/






var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
