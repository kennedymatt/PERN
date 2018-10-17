module.exports = function(seq, DataTypes){

	var User = seq.define('user', {
		username: {
			type: DataTypes.STRING,
		    allowNull: false,
		    unique: true
		},
		passwordhash: {
			type: DataTypes.STRING,
            allowNull: false
		},
		img: {
			type: DataTypes.STRING,
           allowNull: false
		} 
	})

	return User;
}

