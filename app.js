if(process.env.NODE !== 'production'){
  require('dotenv').config();
}

const express = require('express');
const app = express();
const passport = require('passport');
const flash = require('express-flash');
const sessison = require('express-session');
const methodOverride = require('method-override');
const appRouter = require('./private/router/routes.js');
const LoginUtils = require('./private/login/utils.js');
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

app.use('/', appRouter);

app.get('/', LoginUtils.checkIfuserIsLogedin, (req, res) => {
  let view = 'home';
  let model = {user: req.user.email};

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

