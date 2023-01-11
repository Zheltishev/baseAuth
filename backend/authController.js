const User = require('./models/User');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const { secret } = require('./config');

const generateAccessToken = (id) => {
    const payload = {
        id,
    };

    return jwt.sign(payload, secret, { expiresIn: '24h' });
};

class authController {
    async signUp(req, res) {
        try {
            const errorMessage = validationResult(req);

            if (!errorMessage.isEmpty()) {
                return res.json({
                    message: errorMessage.errors[0].msg,
                    atr: 'signUpFalse',
                });
            }

            const { username, password } = req.body;
            const newUser = await User.findOne({ username });

            if (newUser) {
                return res.json({
                    message: 'the user exists',
                    atr: 'signUpFalse',
                });
            }

            const hashPassword = bcrypt.hashSync(password, 7);
            const user = new User({
                username,
                password: hashPassword,
            });

            await user.save();

            return res.json({
                message: 'the user created',
                atr: 'signUpTrue',
            });
        } catch (error) {
            console.error(error);
            res.status(400).json({
                message: 'registration error',
                atr: 'signUpFalse',
            });
        }
    }

    async signIn(req, res) {
        try {
            const { username, password } = req.body;

            console.log('backend signIn - ', username, password);
            const user = await User.findOne({ username });

            if (!user) {
                return res.json({
                    message: `User '${username}' does not find`,
                    atr: 'signInFalse',
                });
            }

            const validPassword = bcrypt.compareSync(password, user.password);

            if (!validPassword) {
                return res.json({
                    message: 'password is wrong',
                    atr: 'signInFalse',
                });
            }

            const token = generateAccessToken(user._id);

            res.json({ message: token, atr: 'signInTrue', username });
        } catch (error) {
            console.error(error);
            res.status(400).json({ message: 'login / password error' });
        }
    }
}

module.exports = new authController();
