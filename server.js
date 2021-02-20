require('dotenv').config()
const { response } = require('express');
const Datastore = require('nedb');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const path = require('path');
var crypto = require('crypto');
const connection = require('./config/database');
const { genPassword } = require('./lib/passwordUtils');
const isAuth = require('./lib/passwordUtils').isAuth;
const User = connection.models.User;
require('./config/passport');

app.listen(3000, () => console.log('listening at 3000'))
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false}))

const sessionStore = new MongoStore({mongooseConnection: connection, collection: 'sessions'});

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
})); 

app.use(passport.initialize());
app.use(passport.session());


const database = new Datastore('grid_answers.db');
database.loadDatabase();

const databaseUsers = new Datastore('users_base.db');
databaseUsers.loadDatabase();

let botNames = ['Alpacca', 'Ole', 'Jhon', 'Mark', 'Tone', 'Lama', 'Elon', 'Frank'];
let winnerList = [];

let clockCounter = 135;
let data;
let skipCount;
const users = [];

//count down the time
setTimeout( () => {
    setInterval( () => {
        clockCounter--;
        if (clockCounter === 50) {
            winnerList = [];
            for (let i = 0; i < botNames.length; i++) {
                winnerList.push({
                    name: botNames[i],
                    points: Math.floor(Math.random() * 150),
                    longest: '',
                    id: Math.random()
                })
            }
            
        }
        if (clockCounter === 0) {
            clockCounter = 135;
        }
    }, 1000);
}, 2000)

//refreash data sent from database to client 
setInterval( () => {
    database.count({}, (err, count) => {
        if (!err && count > 0) {
            skipCount = Math.floor(Math.random() * count);
        } 
    })
}, 135000)


//response with json including grid and solution sent to clinet
app.get(('/grid'), (require, response) => {

    database.find({}).skip(skipCount).limit(1).exec((err2, docs) => {
        if (!err2) {
            
            data = docs[0];
            data.clockCounter = clockCounter;
            response.json(data)
        }
    })
    
}) 

app.get(('/name'), (req, res) => {

    if (typeof req.user == 'undefined') {
        let name = 'Anonym';
        console.log(name);
        res.json(name);
    } else {
        let name = req.user.username;
        console.log(name);
        res.json(name);
    }
    
}) 

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/main.html'));
})

app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/login.html'));
})

app.get('/register', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/register.html'));
})

app.get('/failure-login', (req, res, next) => {
    res.sendFile(path.join(__dirname + '/public/failureLogin.html'));
})

app.get('/logout', (req, res, next) => {
    req.logout();
    res.redirect('/login');
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/failure-login', successRedirect: '/'}))

app.post('/register', (req, res, next) => {
    
    const saltHash = genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        hash: hash,
        salt: salt
    })

    newUser.save()
        .then((user) => {
            console.log(user);
        })

    res.redirect('/login');  
})



//take results from client
app.post(('/results'), (require, response) => {
    const data = require.body;
    console.log(data);
    winnerList.push(data);
    setTimeout(() => {
        winnerList.sort((a, b) => {
            return b.points - a.points;
        })
        console.log(winnerList);
        response.json({winnerList});
    }, 4000)
})

//take data from script that makes levels
app.post(('/gridMaker'), (require, response) => {
    const data = require.body;
    database.insert(data);
    response.json({
        status: 'sucess'
    })
})

