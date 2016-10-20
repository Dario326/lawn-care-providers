const loginRoutes = require('./login/loginRoutes');
const serviceRoutes = require('/service/serviceRoutes');

module.exports = app => {
    loginRoutes(app);
    serviceRoutes(app);
}