var request = require("request");
const APP_KEY = '_APP_KEY_',
APP_SECRET = '_APP_SECRET_';
var options = { method: 'POST',
  url: 'https://api.affmates.com/v1/authentication/token',
  headers: 
   { username: APP_KEY,
     password: APP_SECRET } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
