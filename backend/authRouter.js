const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');

router.post(
    '/signup',
    [
        check('username', 'the name cannot be empty').notEmpty(),
        check(
            'password',
            'the password should be more than 4 symbols and less than 20 symbols'
        ).isLength({ min: 4, max: 20 }),
    ],
    controller.signUp
);

router.post('/signin', controller.signIn);

module.exports = router;
