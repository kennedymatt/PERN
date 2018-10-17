var router = require('express').Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');

router.post('/', function(req, res){
	User.findOne({where:{username: req.body.user.username}}).then(
		function(user){
			if(user){
				bcrypt.compare(req.body.user.password, user.passwordhash,function(err, matches){
					if(matches){
						var token = jwt.sign({id: user.id}, 'Secret', {expiresIn:60*60*24});
						res.json({
							user: user,
							message: "The force is strong with this one",
							sessionToken: token
						});
					}else {
						res.status(500).send({error:"This is not the password you're looking for"})
					}
				});
			}else {
				res.status(500).send({error:"This is not the username you're looking for"})
			}
		}, 
		function(err){
			res.json(err);
		}

		)
})

module.exports = router;