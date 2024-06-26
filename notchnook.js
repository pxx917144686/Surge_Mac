/*
[rewrite_local]
# pxx917144686
# 此脚本用于 notchnook 的破解 官方网站： https://lo.cafe/notchnook

^https:\/\/lo\.cafe\/api\/notchnook-verify-key$ url script-response-body https://github.com/wibus-wee/activation-script/raw/gh-pages/activator.js

[mitm]
hostname = lo.cafe
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
