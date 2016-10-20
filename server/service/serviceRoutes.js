const serviceRoutes = require('./serviceCtrl');
const loginCtrl = require('../login/loginCtrl');

module.exports = app => {
    app.post(`/api/service`, loginCtrl.isAuthed, serviceCtrl.postService );
    app.get(`/api/services`, loginCtrl.isAuthed, serviceCtrl.getService );
    app.get(`/api/service/name/:id`, loginCtrl.isAuthed, serviceCtrl.getOneService);
    app.put(`/api/service/update/:id`, loginCtrl.isAuthed, serviceCtrl.updateService);
    app.delete(`/api/service/delete/:id`, loginCtrl.isAuthed, serviceCtrl.deleteService);
    
}