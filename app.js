require('dotenv').config();
require('./db.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sequelize = require('./db.js');

sequelize.sync();

app.use(bodyParser.json());


app.use(require('./middleware/headers'));

app.use('/jediapp/jedi', require('./routes/jediController'));


app.use(require('./middleware/validate-session'));
app.use('/jediApp/userJedi', require('./routes/userJediController'));
//Creating a user
app.use('/jediapp/user', require("./routes/user"));
// logging in a user
app.use('/jediapp/login', require('./routes/session'));
//save a jedi



app.listen(3000, function(){
	console.log(`app is running on ${process.env.PORT}`);
})

