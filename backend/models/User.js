const { Schema, model } = require('mongoose');

const current = new Date();
const timeStamp = new Date(
    Date.UTC(
        current.getFullYear(),
        current.getMonth(),
        current.getDate(),
        current.getHours(),
        current.getMinutes(),
        current.getSeconds(),
        current.getMilliseconds()
    )
);

const User = new Schema({
    username: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    registrationDate: { type: Date, default: timeStamp },
});

module.exports = model('User', User);
