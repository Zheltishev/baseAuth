const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017';
const authRouter = require('./authRouter');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(mongoURI);

        app.listen(PORT, () => {
            console.log(`server has been started on port ${PORT}`);
        });
    } catch (err) {
        console.error(err);
    }
};

start();
