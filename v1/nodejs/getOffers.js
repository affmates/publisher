var request = require("request");
const TOKEN = '_TOKEN_'; //Received from getToken.js
let url = 'https://api.affmates.com/v1/pub/offer/get',
params = {
    adv:'shopee',
    offer:null,
    subscript:null,
    type:'all',
    page:1
};
if(params && Object.keys(params).length){
    let queryStr = Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
    url += `?${queryStr}`;
}
var options = { method: 'GET',
  url: url,
  headers: 
   { authorization: `Bear ${TOKEN}` } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
