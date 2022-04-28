<p align="center"><img src="https://user-images.githubusercontent.com/92972462/138407033-d1661864-0dab-4880-8546-7bbd436f4a06.png" width="200px" alt="Affmates - Linking our world"></p>

# API FOR PUBLISHER
#### Version: 1.0
#### Table of contents

<!--ts-->
   * [Authentication](#authentication)
   * [Offer List](#1-offer-list)
   * [Conversion List](#2-conversion-list)
   * [products List](#3-product-list)
<!--te-->

This package provides some APIs to manipulate with Affmates server. To learn all about it please check  document and demo files included

Here are a few short examples of what you can do:

Flow: get token ---> authorization --> Call API

### Authentication
```
POST /v1/authentication/token HTTP/1.1
Host: api.affmates.com
username: _APP_KEY_
password: _APP_SECRET_
Content-Type: multipart/form-data;
```
This function will get Refresh Token for Publisher
- APP_KEY and APP_SECRET will provide for Publisher in Pub center (pub.affmates.com)
- Token will expried after 10 days
- Publisher can request a lifetime token

<strong>Response</strong>:
- Code: 400 -  Bad Request
- Code: 403 -  Forbidden
- Code: 401 -  Unathorized
- Code: 404 -  Server Not found
- Code: 408 -  Request Timeout
- Code: 200 -  Success
```javascript
{
    "code": 401,
    "message": "Unauthorized",
    "description": "Account has not been activated or has been locked",
    "data": []
}
//Or
{
    "code": 200,
    "message": "OK",
    "description": "Token Created",
    "data": {
        "token": "_TOKEN_",
        "expired": 1635699600,
        "scope": "partner,postback,conversion_get,conversion_update" //List of scopes available
    }
}
```
### 1. Offer List

<strong>Header</strong>
+ Content-Type: application/json
+ Authorization: Bear _TOKEN_
+ TOKEN received from Authentication

```
GET /v1/pub/offer/get HTTP/1.1
Host: api.affmates.com
Authorization: Bear _TOKEN_
```
<strong>Request Params</strong>
```
- adv: Advertiser Id                                            (Optional) - Default:null
- type: "cps"    // Choose one of: cps/cpa/cpi/cpm/cpc/cpl/     (Optional) - Default: all
- subscript: "join"   //Get all Offer have joined               (Optional) - Default: null
- offer:    Offer Id                                            (Optional) - Integer
- page:     1                                                   (Optional) - Default: 1
```
<strong>Response</strong>

```
- Code: 400 -  Bad Request
- Code: 403 -  Forbidden
- Code: 401 -  Unathorized
- Code: 404 -  Server Not found
- Code: 408 -  Request Timeout
- Code: 200 -  Success
{
    "code": 200,
    "message": "OK",    //Send ok
    "description": "", 
    "data": {
        "total": 20,
        "limit": 200,
        "page": 1,
        "items":[
            {
                "offerId": "1",
                "offerName": "Offer 1",
                "advertiser": "shopee",
                "offerUrl": "https://www.shopee.vn/",
                "category": "Thương mại điện tử",
                "type": "cps",
                "logo": "logo offer",
                "platform": "web,app",
                "description":"Description offer",
                "commission": "6%",
                "country": "Vietnam",
                "startDate": "2021-11-06",
                "endDate": "2022-11-06",
                "registeredStatus": "joined"
                "commission": "6%",
                "country": "Vietnam",
                "startDate": "2021-11-06",
                "endDate": "2022-11-06",
                "registeredStatus": "joined"
            },
        ]
    }
}
```
### 2. Conversion List
<strong>Header</strong>
+ Content-Type: application/json
+ Authorization: Bear _TOKEN_
+ TOKEN received from Authentication

```
GET /v1/pub/conversion/get HTTP/1.1
Host: api.affmates.com
Authorization: Bear _TOKEN_
```
<strong>Request Params</strong>
```
- start:  Start date - YYYY-MM-DD. Ex: 2021-12-24               (REQUIRED)
- end:    End date  - YYYY-MM-DD. Ex: 2021-12-24                (REQUIRED)
* Only request between 30 days
- adv: Advertiser Id                                            (Optional) - Default:null
- channel: "channel_name"                                       (Optional) - Default: null
- status: "pending"   //Filter status: pending, 
                               approved, rejected               (Optional) - Default: null
- offer:    Offer Id                                            (Optional) - Default: null - Integer
- page:     1                                                   (Optional) - Default: 1
```
<strong>Response</strong>

```
- Code: 400 -  Bad Request
- Code: 403 -  Forbidden
- Code: 401 -  Unathorized
- Code: 404 -  Server Not found
- Code: 408 -  Request Timeout
- Code: 200 -  Success
{
    "code": 200,
    "message": "OK",    //Send ok
    "description": "", 
    "data": {
        "total": 5464,
        "limit": 200,
        "page": 1,
        "items":[
            {
                "offerId": "3",
                "offerName": "Shopee CPS",
                "offerType": "cps",
                "advertiser": "shopee",
                "channel": "facebook",
                "publisherId": "admaster",
                "conversionId": "c6edeb897d781e170446ddde98695a3c",
                "orderCode": "210921TJFQB69F",
                "productCode": "9560800012-35673175659-0_10790164_1",
                "productName": "[TEM CTY] ATOPICLAIR Cream Helps Relieve Dry Itchy Skin 40mL - Kem Dưỡng Ẩm Da, Giảm Ngứa, Khô Rát.",
                "categoryCode": "Sức Khỏe & Sắc Đẹp",
                "qty": 2,
                "actualAmount": 476270,
                "commission": 4572.19,
                "currency": "VND",
                "adsub1": "",
                "adsub2": "",
                "adsub3": "",
                "platform": "app",
                "conversionTime": "2021-09-21 15:46:48",
                "ip_address": "127.0.0.1",
                "status": "pending",
                "temporaryApproveReview": "",               //approved-review and empty - this mean Adv is reviewing for approve
                "clickTime": "2021-10-07 15:38:33"
            },
        ]
    }
}
```
### 3. Product List

<strong>Header</strong>
+ Content-Type: application/json
+ Authorization: Bear _TOKEN_
+ TOKEN received from Authentication

```
GET /v1/pub/products/get HTTP/1.1
Host: api.affmates.com
Authorization: Bear _TOKEN_
```
<strong>Request Params</strong>
```
- adv: "tiki" | "lazada"                                        (Optional) - Default:null
- category: "dien-thoai-di-dong"                                (Optional) - Default: all
- page:     1                                                   (Optional) - Default: 1
```
<strong>Response</strong>

```
- Code: 400 -  Bad Request
- Code: 403 -  Forbidden
- Code: 401 -  Unathorized
- Code: 404 -  Server Not found
- Code: 408 -  Request Timeout
- Code: 200 -  Success
{
  "code": 200,
    "message": "OK",
    "description": "",
    "data": {
        "total": 90,
        "limit": 200,
        "page": 1,
        "items": [
            {
                "offer": "lazada",
                "productCode": "275590387_VNAMZ",
                "productName": "Máy may gia đình, máy may mini CMD-26 cho đường may chính xác, sáng tạo, đảm đang tại nhà ( TẶNG KÈM BÀN ĐẠP - CÓ THỂ DÙNG PIN THAY THẾ)",
                "category": "do-gia-dung-nho",
                "categoryName": "Đồ gia dụng nhỏ,Đồ gia dụng nhỏ",
                "image": "https://vn-test-11.slatic.net/p/34dc9949543e26baa12a5b19cceea7db.jpg",
                "price": "227160",
                "originPrice": "450000",
                "url": "https://www.lazada.vn/products/may-may-gia-dinh-may-may-mini-cmd-26-cho-duong-may-chinh-xac-sang-tao-dam-dang-tai-nha-tang-kem-ban-dap-co-the-dung-pin-thay-the-i275590387.html",
                "trackingUrl": "https://cre-ads.com/deeplink/admaster?url=https%3A%2F%2Fwww.lazada.vn%2Fproducts%2Fmay-may-gia-dinh-may-may-mini-cmd-26-cho-duong-may-chinh-xac-sang-tao-dam-dang-tai-nha-tang-kem-ban-dap-co-the-dung-pin-thay-the-i275590387.html",
                "thumbnails": "[{\"image\":\"https:\\/\\/vn-live-01.slatic.net\\/p\\/34dc9949543e26baa12a5b19cceea7db.jpg\"}]",
                "createDate": "2022-04-28 02:14:21",
                "updateDate": "2022-04-28 02:14:21"
            },
            {
                "offer": "lazada",
                "productCode": "993178805_VNAMZ",
                "productName": "Máy hút bụi cầm tay đa năng, máy hút bụi oto có đầu bơm hơi, hút bụi gia đình công suất lớn, lực hút khỏe, bơm hơi oto, đèn led hiển thị, an toàn tiện lợi, bảo hành chính hãng 2 năm, lỗi đổi mới trong",
                "category": "do-gia-dung-nho",
                "categoryName": "Đồ gia dụng nhỏ,Đồ gia dụng nhỏ",
                "image": "https://vn-test-11.slatic.net/p/52342d95f535d5984572da2754710a02.jpg",
                "price": "356780",
                "originPrice": "730000",
                "url": "https://www.lazada.vn/products/may-hut-bui-cam-tay-da-nang-may-hut-bui-oto-co-dau-bom-hoi-hut-bui-gia-dinh-cong-suat-lon-luc-hut-khoe-bom-hoi-oto-den-led-hien-thi-an-toan-tien-loi-bao-hanh-chinh-hang-2-nam-loi-doi-moi-trong-vong-7-ngay-dau-i993178805.html",
                "trackingUrl": "https://cre-ads.com/deeplink/admaster?url=https%3A%2F%2Fwww.lazada.vn%2Fproducts%2Fmay-hut-bui-cam-tay-da-nang-may-hut-bui-oto-co-dau-bom-hoi-hut-bui-gia-dinh-cong-suat-lon-luc-hut-khoe-bom-hoi-oto-den-led-hien-thi-an-toan-tien-loi-bao-hanh-chinh-hang-2-nam-loi-doi-moi-trong-vong-7-ngay-dau-i993178805.html",
                "thumbnails": "[{\"image\":\"https:\\/\\/vn-live-01.slatic.net\\/p\\/3feb59419c802e0d12c017e9a2c2a300.jpg\"},{\"image\":\"https:\\/\\/vn-live-01.slatic.net\\/p\\/52342d95f535d5984572da2754710a02.jpg\"}]",
                "createDate": "2022-04-28 02:14:21",
                "updateDate": "2022-04-28 02:14:21"
            },
            {
                "offer": "lazada",
                "productCode": "355688866_VNAMZ",
                "productName": "Robot hút bụi lau nhà ECOVACS DE53 Lực hút 1000PA, Độ ồn 50dB, Pin 3000mAh Hàng trưng bày mới 99%",
                "category": "do-gia-dung-nho",
                "categoryName": "Đồ gia dụng nhỏ,Đồ gia dụng nhỏ",
                "image": "https://vn-test-11.slatic.net/p/mdc/2143a2fd00801be0ada87eef39544090.jpg",
                "price": "2990000",
                "originPrice": "4500000",
                "url": "https://www.lazada.vn/products/robot-hut-bui-lau-nha-ecovacs-de53-luc-hut-1000pa-do-on-50db-pin-3000mah-hang-trung-bay-moi-99-i355688866.html",
                "trackingUrl": "https://cre-ads.com/deeplink/admaster?url=https%3A%2F%2Fwww.lazada.vn%2Fproducts%2Frobot-hut-bui-lau-nha-ecovacs-de53-luc-hut-1000pa-do-on-50db-pin-3000mah-hang-trung-bay-moi-99-i355688866.html",
                "thumbnails": "[{\"image\":\"https:\\/\\/vn-live-01.slatic.net\\/p\\/mdc\\/2143a2fd00801be0ada87eef39544090.jpg\"}]",
                "createDate": "2022-04-28 02:14:21",
                "updateDate": "2022-04-28 02:14:21"
            }
        ]
}
```

## Security

If you discover any security related issues, please email [partner@affmates.com](mailto:partner@affmates.com) instead of using the issue tracker.

## Credits

- [Technical Affmates](https://github.com/affmates)
- [Affmates support team](https://affmates.com)

## Alternatives



## License

Affmates Production - @2021

