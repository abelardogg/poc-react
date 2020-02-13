if(process.env.NODE !== 'production'){
  require('dotenv').config();
}

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport');
const initializePassport = require('./passport-config');
const flash = require('express-flash');
const sessison = require('express-session');
const methodOverride = require('method-override');

initializePassport(passport, getUserByEmail ,getUserById);


function getUserByEmail(email){
  return users.find(user => user.email === email)
}
function getUserById(id){
  return users.find(user => user.id === id)
}


const users = [];


// CONFIG
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false})); 
app.use(flash());
app.use(sessison({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));


app.get('/register',userIsLogedout, (req, res) => {
  let view = 'register';
  let model = {};

  res.render(view, model);
});

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: Date.now().toString(),
      email: req.body.email,
      password: hashedPassword
    });
  res.redirect('login');
  } catch (error) {
    res.redirect('/error');
  }
  console.log(users);
});

app.get('/login', (req, res) => {
  let view = 'login';
  let model = {};

  res.render(view, model);
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/error',
  failureFlash: true
}));



app.get('/home',checkIfuserIsLogedin, (req, res) => {
    let view = 'index';
    let model = {};

    res.render(view, model);
});

app.get('/error', (req, res) => {
    let view = 'error';
    let model = {};

    res.render(view, model);
});

app.delete('/logout', (req, res) =>{
  req.logOut();
  res.redirect('/login');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});

function checkIfuserIsLogedin(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
return res.redirect('/login');
}

function userIsLogedout(req, res, next){
  if(req.isAuthenticated()){
    return res.redirect('/home');
  }
next()
}
