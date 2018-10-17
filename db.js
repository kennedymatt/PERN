const Sequelize = require('sequelize');
// console.log(typeof process.env.DATABASE_URL)

const seq = new Sequelize(`postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/<dBName>` 
	dialect: 'postgres'
);

// `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/<dBName>`



seq.authenticate().then(
	function(){
		console.log("you're connected to the  database")
	},
	function(err){
		console.log(err)
	}
);

var User = seq.import('./models/user');
var Jedi = seq.import('./models/jedi')

seq.sync()
module.exports = seq


// const Sequelize = require('sequelize');

//       //2               //3       //4         //5            //6          
// const sequelize = new Sequelize('jedigenerator', 'postgres', 'PostgresDog2021@', {
//     host: 'localhost', //7
//     dialect: 'postgres'  ///8
// });
//     //9      //10         //11         
// sequelize.authenticate().then(
//     function() { //12
//         console.log('Connected to jedigenerator postgres database');
//     },
//     function(err){ //13
//         console.log(err);
//     }
// );
//                  //14
// module.exports = sequelize;