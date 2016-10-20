const Service = require('./service');

module.exports = {
    postService(req, res, next){
        new Service(req.body).save( (err, newService ) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.status(201).json(newService);
        } )
    },
    getService(req, res, next){
        Service.find({}, ( err, services ) => {
            if(err){
                return res.status(500).json(err)
            }
            return res.status(200).json(services)
        } )
    },
    getOneUser(req, res, next) {
        Service.findById( req.params.id, ( err, service ) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(service);
        } )
    },
    deleteOneService(req, res, next) {
        Service.findByIdAndRemove( req.params.id, (err, deletedUser) => {
            if(err){
                return res.status(500).json(err);
            }
            retunr res.status(200).json(deletedUser);
        } )
    },
    UpdateService( req, res, next) {
        Service.findByIdAndUpdate(req.params.id, req.body, (err, service) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.status(200).json(service)
        })
    },
}