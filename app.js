//require npm modules
const express= require('express');
const app  = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path  = require('path');

//require local modules incluyding routes
const db = require('./models');
const api = require('./api')

//set up middleware from outside modules
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//static routing
app.use('/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, '/public')))

//local middleware
app.use('/api', api)
app.use((req, res, next)=>{
    res.sendFile(path.join(__dirname + 'index.html'));
})

//error handling
app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.send(err);
})


//sync database, listen for server
db.sync()
    .then(app.listen(1337, ()=>console.log("listening on 1337")))




