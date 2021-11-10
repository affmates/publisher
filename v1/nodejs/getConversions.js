var request = require("request");
const TOKEN = '_TOKEN_'; //Received from getToken.js
let url = 'https://api.affmates.com/v1/pub/conversion/get',
params = {
    start: '2021-09-01',    //REQUIRED
    end: '2021-09-30',      //REQUIRED - between 30 days
    adv:'shopee',
    offer:null,
    status: 'pending',      //Optional - pending/approved/rejected/normall
    channel: 'channel_name',      //Optional - Channel name
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
