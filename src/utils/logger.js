// logger.js
const winston = require('winston');
const { createLogger, format, transports } = winston;
const { combine, timestamp, printf, colorize } = format;

// Custom log format
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
    level: 'info',
    format: combine(
        colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [
        // Write logs to console
        new transports.Console(),
        // new transports.File({ filename: 'logs/app.log', level: 'info' }),
        // new transports.File({ filename: 'logs/error.log', level: 'error' })
    ]
});

module.exports = logger;