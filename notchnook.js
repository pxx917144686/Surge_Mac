/*
[rewrite_local]
# notchnook 破解
# 此脚本用于 notchnook 的破解

^https:\/\/api\.lemonsqueezy\.com\/v1\/licenses url script-response-body https://github.com/wibus-wee/activation-script/raw/gh-pages/notchnook.js
^https:\/\/v3\.paddleapi\.com\/3\.2\/license url script-response-body https://github.com/wibus-wee/activation-script/raw/gh-pages/notchnook.js
^https:\/\/api\.gumroad\.com\/v2\/licenses url script-response-body https://github.com/wibus-wee/activation-script/raw/gh-pages/notchnook.js
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://github.com/wibus-wee/activation-script/raw/gh-pages/notchnook.js
^https:\/\/backend\.raycast\.com\/api\/v1\/me url script-response-body https://github.com/wibus-wee/activation-script/raw/gh-pages/notchnook.js
^https:\/\/shottr\.cc\/licensing\/verify\.php url script-response-body https://github.com/wibus-wee/activation-script/raw/gh-pages/notchnook.js

[mitm]
hostname = api.lemonsqueezy.com, v3.paddleapi.com, api.gumroad.com, buy.itunes.apple.com, backend.raycast.com, shottr.cc
*/

const jwt = require('jsonwebtoken');

var response = {
  valid: false,
  iat: Math.floor(Date.now() / 1000),
};

const token = jwt.sign(response, 'secret', { algorithm: 'RS256' });

var responseBody = {
  token: token,
};

$done({
  status: 200,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(responseBody)
});
