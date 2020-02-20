const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const LoginUtils = require('../login/utils.js');
let UsersRepository = require('../repository/Users.js');
router.get('/register', LoginUtils.userIsLogedout, (req, res) => {
    let view = 'register';
    let model = {};

    res.render(view, model);
});

router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        UsersRepository.UsersList.push({
            id: Date.now().toString(),
            email: req.body.email,
            password: hashedPassword
        });
        res.redirect('login');
    } catch (error) {
        res.redirect('/error');
    }
    console.log(UsersRepository.UsersList);
});

module.exports = router;