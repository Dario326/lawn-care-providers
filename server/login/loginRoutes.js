const passport = require('passport');
const loginCtrl = require('./loginCtrl');
const GoogleStrategy = require('passport-google-oauth20').Stategy;

module.exports = app => {
    app.get('/api/auth/google', 
        { scope:
    	[ 'https://www.googleapis.com/auth/plus.login',
    	, 'https://www.googleapis.com/auth/plus.profile.emails.read' ] 
    })
    app.get('/api/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    }))
    app.get('/api/auth/google/logout', function(req, res){
        req.logout();
        res.render('login');
    })
    app.get('/dashboard', function(req, res){
        if(req.isAuthenticated()) {
            res.render('dashboard');
        }
        else {
            res.render('login');
        }
    })
    app.get('api/auth/facebook', passport.authenticate('facebook'));

    app.get('api/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
    }),
      function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
      });
    app.get('/api/auth/facebook/logout', function(req, res){
        req.logout();
        res.render('login');
    })
    app.get('/api/auth/google/isAuthed', loginCtrl.loggedIn);
}