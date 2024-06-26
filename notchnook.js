{\rtf1\ansi\ansicpg936\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset134 PingFangSC-Regular;\f2\fnil\fcharset0 HelveticaNeue;
\f3\froman\fcharset0 Times-Roman;\f4\fnil\fcharset134 STSongti-SC-Regular;}
{\colortbl;\red255\green255\blue255;\red251\green2\blue7;\red255\green255\blue255;\red13\green80\blue209;
}
{\*\expandedcolortbl;;\cssrgb\c100000\c14913\c0;\cssrgb\c100000\c100000\c100000;\cssrgb\c3529\c41176\c85490;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww20360\viewh13900\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /*\
[rewrite_local]\
# pxx917144686\
# 
\f1 \'b4\'cb\'bd\'c5\'b1\'be\'d3\'c3\'d3\'da
\f0  
\f2\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
\ul \ulc2 \outl0\strokewidth0 \strokec4 notchnook
\f3 \cf0 \cb1 \ulnone \outl0\strokewidth0  \cf2 \uc0\u30340 \u30772 \u35299 
\fs24 \cf0  \uc0\u23448 \u26041 \u32593 \u31449 \u65306  {\field{\*\fldinst{HYPERLINK "https://apps.apple.com/sg/app/ai-chatbot-ai-chat-smith-4/id1559479889?l=zh-Hans-CN"}}{\fldrslt https://lo.cafe/notchnook}}\
# 
\f4 \'b4\'cb\'bd\'c5\'b1\'be\'a3\'ac\'d2\'d1\'ca\'c7\'bb\'ec\'cf\'fd\'b5\'c4\'b0\'e6\'b1\'be\'a3\'ac\'bb\'ec\'cf\'fd\'b4\'fa\'c2\'eb\'a3\'ac\'ca\'b9\'c6\'e4\'b8\'fc\'c4\'d1\'c0\'ed\'bd\'e2\'ba\'cd\'b8\'b4\'d6\'c6\'a1\'a3
\f0 \kerning1\expnd0\expndtw0 \
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0
\cf0 ^https:\\/\\/lo\\.cafe\\/api\\/notchnook-verify-key$ url script-response-body https://raw.githubusercontent.com/pxx917144686/pxx/main/notchnook.js\
\
[mitm]\
hostname = lo.cafe\
\
const jwt = require('jsonwebtoken');\
\
var response = \{\
  valid: false,\
  iat: Math.floor(Date.now() / 1000),\
\};\
\
const token = jwt.sign(response, 'secret', \{ algorithm: 'RS256' \});\
\
var responseBody = \{\
  token: token,\
\};\
\
$done(\{\
  status: 200,\
  headers: \{\
    'Content-Type': 'application/json'\
  \},\
  body: JSON.stringify(responseBody)\
\});}
