<?php
include 'function.php';
$token = "_TOKEN_"; //Receive from getToken
$url = "https://api.affmates.com/v1/pub/offer/get";
$type = "GET";
$params = [
    'adv' => 'shopee',              //Advertiser ID (Optional)
    'offer' => null,              //Offer ID (Optional) - Integer
    'type'  => 'cps',              //cps, cpo, cpi, cpc.... (Optional)
    'subscript'=>'join',           //join if only get joined Offers otherwise null value
    'page'=>1,                     //page  - default 1
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