var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js')
var userJedi = sequelize.import('../models/userJedi.js');
// userJedi.sync({force:"true"});




router.post('/', (req, res) => {
    var Name = req.body.userJedi.Name;
    var Race = req.body.userJedi.race;
    var Lightsaber = req.body.userJedi.lightsaber;
    var Vehicle = req.body.userJedi.Vehicle;
    var Planet = req.body.userJedi.planet;
    
       
    userJedi.create({
        Owner: user.id,
        Name: Name,
        Race: Race,
        Lightsaber: Lightsaber,
        Vehicle: Vehicle,
        Planet: Planet
    }).then(
        function createSuccess(userJedi) {
            res.json({
                jedi: jedi,
                message: "you added a jedi"
            })
        },
        function createError(err) {
            res.send(500, err.message)
        }
    )



        

    // }).then(data => {
    //     res.send(data)
    // })
        // function createSuccess(userJedi) {
        //     res.json({
        //         jedi: jedi,
        //         message: "Help me Obi-Wan Kenobi, you’re my only hope."
        //     })
        // }, 
        // function createError(err) {
        //     res.send(500, err.message)
        // }
        // )
    })
    
router.get('/', (req, res) => {
    var userid = req.user.id;
    
    userJedi.findAll({where: {owner: userid}}).then(
        function findAllSuccess(data) {
            res.json(data)
        },
        function findAllError(err) {
            res.send(500, err.message)
        }
        )
})

router.delete('/:id', (req, res) => {
    var dataID = req.params.id;
    
    userJedi.destroy({where: {id: dataID}}).then(
        function deleteUserJediSuccess(data) {
            res.send("His power was no match for me");
        },
        function deleteUserJediError(err) {
            res.send(500, err.message)
        }
        )
})

router.put('/:id', (req, res) => {
    var User = req.user
    var data = req.params.id
    var owner = req.user
    var name = req.body.userJedi.name
    var race = req.body.userJedi.race
    var lightsaber = req.body.userjedi.lightsaber
    var vehicle = req.body.userjedi.vehicle
    var companion = req.body.userjedi.companion
    
    UserJedi.update({
        Owner: owner,
        Name: name,
        Race: race,
        Lightsaber: lightsaber,
        Vehicle: vehicle,
        Companion: companion,
        Planet: planet
    }, {where: {id: data}}).then(
        function updateSuccess(updateData) {
            res.json(updateData)
        }, 
        function updateError(err) {
            res.send(500, err.message)
        }
    )
})

module.exports = router;




    // router.get('/', (req, res) => {
    //     Jedi.findAll({
    //         Name : req.body.name,
    //         Race : req.body.race,
    //         Lightsaber : req.body.lightsaber,
    //         Vehicle : req.body.vehicle,
    //         Companion : req.body.companion,
    //         Planet : req.body.planet
    
    //     }).then(
    //         function findAllSuccess(data) {
    //             res.json(data);
    //         },
    //         function findAllError(err) {
    //             res.send(500, err.message)
    //         }
    //     ) 
    // })