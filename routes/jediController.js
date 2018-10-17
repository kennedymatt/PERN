var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var Jedi = sequelize.import('../models/jedi.js');


router.get('/', (req, res) => {
    Jedi.findAll({
        Name : req.body.name,
        Race : req.body.race,
        Lightsaber : req.body.lightsaber,
        Vehicle : req.body.vehicle,
        Planet : req.body.planet
        
    }).then(
        function findAllSuccess(data) {
            res.json(data);
        },
        function findAllError(err) {
            res.send(500, err.message)
        }
        ) 
    })
    
module.exports = router;
    // router.post('/', (req, res ) => {
    //     Jedi.create({
    //         Name : req.body.name,
    //         Race : req.body.race,
    //         Lightsaber : req.body.lightsaber,
    //         Vehicle : req.body.vehicle,
    //         Companion : req.body.companion,
    //         Planet : req.body.planet
    
    //     }).then(
    //         function findAllSuccess(Data) {
    //             res.json(Data)
    //         }
    //     )  
    // })