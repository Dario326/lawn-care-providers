var express = require('express');
var gulpfile = require('./gulpfile');
var sessions = require('express-session');
var passport = require('passport');
var { json } = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
var port = 8080;
var app = express();

app.use(express.static(path.resolve('./build')));

var mongoUri = `mongodb://${keys.mongoUser}:${keys.mongoPass}@ds019786.mlab.com:19786/lawn-care-providers`
var corsOptions = {
    origin: 'http://localhost:8080'
}

app.use( json() );

app.use(sessions({ secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());

masterRoutes(app);
gulpfile(app);

mongoose.connection.once('open', () =>{
    console.log('connected to mongo at ${ mongoUri }')
})

mongoose.connect(mongoUri);

const User = require('./server/login/User');

passport.use(new FacebookStrategy({
    clientID: keys.FACEBOOK_APP_ID,
    clientSecret: keys.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8080/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      if(err){
          return done(err)
      }
        done(null, user);
    });
  }
));

passport.use(new GoogleStrategy({
    clientID:     keys.googleClientId,
    clientSecret: keys.googleClientSecret,
    callbackURL: "http://localhost:8080/api/auth/google/callback",
    passReqToCallback: true
  },
    
    function(request, accessToken, refreshToken, profile, done) {

    User.findOne( {googleId: profile.id}, ( err, user ) => {
      if (!user) {
        new User( { googleId: profile.id, name: profile.displayName, email: profile.emails[0].value, image: profile.photos[0].value } ).save( ( err, user ) => {
          return done(err, user);
        })
      }
      else {

        return done(err, user);
      }

    })
}));

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(obj, done){
    done(null, obj);
})
app.listen('port', function(){
    gutil.log('listening on', 'port');
});