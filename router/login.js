const { request } = require('express');
var express = require('express')
var router = express.Router();
var path = require('path')
var mysql = require('mysql')

//database setting
var connection = mysql.createConnection({
    host     : 'localhost',
    port : 3306,
    user     : 'root',
    password : '111111',
    database : 'db'
  });

  connection.connect();

  router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/login.html'))
})

//router!! 
router.post('/form', function(req, res){
    var email = req.body.email;
   // res.send(`Welcome! ${email}`)
   res.render('email.ejs', {'email': req.body.email})
})

router.post('/login', function(req, res){
    // console.log(req.body.email);
    // var responseData = {'result': 'ok', 'email' : req.body.email}
    var email = req.body.email;
    var password = req.body.password;
    // console.log(req.body);
    // console.log(email);
    // console.log(password);
    var responseData = {};
    
    connection.query('SELECT * from user where email= ?', [email] , function(err, rows) {
        if (err) throw err;      
        if(rows[0]) {
            if(rows[0].pw === password){
            //console.log(rows[0].pw)
            responseData.result = "ok";
            var name = rows[0].name;
            responseData.name = `Welcome! ${name}`;
            //console.log( rows[0].name);
            }
            else {
                responseData.result = "none";
                responseData.name = "none";
                //console.log('none : ' + rows[0])
            }  
       
          } else{
            responseData.result = "non";
            responseData.name = "non";
          }
          console.log(responseData);      
          res.json(responseData)
    });
    })



    module.exports = router;