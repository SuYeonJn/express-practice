var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

  // request 와 response 라는 인자를 줘서 콜백 함수를 만든다.
// localhost:3000 브라우저에 res.sendFile() 내부의 파일이 띄워진다.

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/public/mainpage.html")
})

// localhost:3000/main 브라우저에 res.sendFile() 내부의 파일이 띄워진다.
app.get('/mainpage', function(req,res) {
    res.sendFile(__dirname + "/public/mainpage.html")
})
app.get('/teampage', function(req,res) {
    res.sendFile(__dirname + "/public/teampage.html")
})
app.get('/whowearepage', function(req,res) {
    res.sendFile(__dirname + "/public/whoweare.html")
})

app.get('/test', function(req, res){
    res.send("<h1>ddd</h1>")
})

app.post('/email_post', function(req, res){
    //var email = req.body.email;
   // res.send(`Welcome! ${email}`)
   res.render('email.ejs', {'email': req.body.email})
})
app.post('/ajax_send_email', function(req, res){
    console.log(req.body.email);
    var responseData = {'result': 'ok', 'email' : req.body.email}
    res.json(responseData)
})

app.post('/practice', function(req, res){
    res.render('email.ejs', {'result': req.body.search})
})
app.post('/ajax_send_search', function(req, res){
    var responseData = {'result': 'ok', 'search' : req.body.search}
    res.json(responseData)
})



// public 디렉토리를 static으로 기억한다.
// public 내부의 파일들을 localhost:3000/파일명 으로 브라우저에서 불러올 수 있다.
