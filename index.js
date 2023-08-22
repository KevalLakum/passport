const express = require('express');
const cookieParser = require('cookie-parser');
const session= require('express-session');
const users = require('./routes/route');
const connect = require('./config/db');
const passport = require('passport');
const localpassport = require('./middleware/middlewarelogin');
localpassport(passport)
const app = express();

app.set("view engine","ejs")
app.use(express.static(__dirname+'/public'));
app.set('views',__dirname+'/views');
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({secret:'secret'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(users)


app.listen(7070,()=>{
    console.log('listening on port 7080');
    connect();
})