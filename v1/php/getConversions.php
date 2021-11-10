<?php
include 'function.php';
$token = "_TOKEN_"; //Receive from getToken
$url = "https://api.affmates.com/v1/pub/conversion/get";
$type = "GET";
$params = [
    'start'=> '2021-09-10',         //REQUIRED   (Start and end between 30 days)
    'end' => '2021-09-30',          //REQUIRED 
    'adv' => 'shopee',              //(Optional) -  Advertiser ID 
    'offer' => null,                //(Optional) -  Offer ID - Integer
    'channel'  => 'channel_name',   //(Optional) -  Channel name
    'status'=>'pending',            //(Optional) -  pending/approved/rejected/normal (normal: all exclude rejected)
    'page'=>1,                      //page  - default 1
];

if($params){
    $url .= "?".http_build_query($params);
}

$headers = [
    'Authorization: Bear '.$token,
    'Content-Type: application/json'
];
$postData = json_encode($postData);
// $postData = json_encode($postManyData);
$response = $this->callApi($url, $headers, $type, $postData);
_log($response);