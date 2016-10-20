const User = require('./User');

module.exports = {
    loggedIn(req, res, next) {
        if(req.user){
            return res.json(req.user);
        }
        else {
            return res.json(false);
        }
    },
    isAuthed(req, res, next) {
        if(req.authenticated()) {
            next()
        }
        else {
            res.render('login');
        }
    }
}