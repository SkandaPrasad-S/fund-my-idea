const express = require('express')
const morgan = require('morgan')
const logger = require('./utils/logger')

const connectDB = require('./utils/database');
const { PORT } = require('./config/environment');
const checkJwt = require('./middlewares/auth');

const app = express();

app.use(express.json())
app.use(morgan('dev'))

connectDB();

app.get('/', (req, res) => {
    logger.info('Public Route accessed');
    res.send('Public Route: No authentication needed.');
});

// Protected Route
app.get('/protected', checkJwt, (req, res) => {
    logger.info('Protected route accessed');
    res.send('You are viewiing a protected route');
});

// Start Server
app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});