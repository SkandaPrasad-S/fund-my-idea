require('dotenv').config()

const ENVIRONMENT = process.env.NODE_ENV || 'dev';
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;
const JWT_SECRET = process.env.JWT_SECRET;
const AUTH0_DOMAIN=process.env.AUTH0_DOMAIN;
const AUTH0_AUDIENCE=process.env.AUTH0_AUDIENCE;

if (!DATABASE_URL || !JWT_SECRET){
    throw new Error("Required env are missing")
}

module.exports = { ENVIRONMENT, PORT, DATABASE_URL, JWT_SECRET, AUTH0_DOMAIN, AUTH0_AUDIENCE };