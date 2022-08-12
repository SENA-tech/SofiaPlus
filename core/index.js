const express = require('express');
const app = express();

//Dotenv
require('dotenv').config();

//Configure the app to use the views folder
app.set('views', './build');

//set html how view engine
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(process.env.PORT, () => {
    console.log('Server is running in port: ' + process.env.PORT);
});