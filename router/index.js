var express = require('express')
var router = express.Router();
var path = require('path')

//__dirname -> 현재 경로 의미

// localhost:3000/mainpage 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/mainpage.html'))
})

module.exports = router;