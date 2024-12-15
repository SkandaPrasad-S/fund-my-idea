require('dotenv').config();

const { AUTH0_DOMAIN, AUTH0_AUDIENCE } = process.env;
const { auth } = require('express-oauth2-jwt-bearer');
const port = process.env.PORT || 8080;

const checkJwt = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_DOMAIN,
  tokenSigningAlg: 'RS256'
});


module.exports = checkJwt;
