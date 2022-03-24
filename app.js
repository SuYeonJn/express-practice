var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var index = require('./router/index')
var login = require('./router/login')
var join = require('./router/join')

app.listen(3000, function() {
    console.log("start! express server on port 3000")
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

app.use('/', index)
app.use('/login', login)
app.use('/join', join)


app.get('/test', function(req, res){
    res.send("<h1>ddd</h1>")
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
