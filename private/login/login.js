const express = require('express');
const router = express.Router();
const passport = require('passport');
const initializePassport = require('../../passport-config');
let Users = require('../repository/Users');

initializePassport(passport, Users.getUserByEmail, Users.getUserById);

router.get('/login', (req, res) => {
    let view = 'login';
    let model = {};

    res.render(view, model);
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/error',
    failureFlash: true
}));

module.exports = router;
