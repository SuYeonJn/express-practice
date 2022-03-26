var express = require('express')
var router = express.Router();
var path = require('path')

//__dirname -> 현재 경로 의미

// request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:3000/ 브라우저에 res.sendFile() 내부의 파일이 띄워진다.

/*app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/mainpage.html")
})
*/
router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/teampage', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/teampage.html"))
})
router.get('/whowearepage', function(req,res) {
    res.sendFile(path.join(__dirname, "/public/whoweare.html"))
})


module.exports = router;