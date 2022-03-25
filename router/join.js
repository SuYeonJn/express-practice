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

//router!! 
router.get('/', function(req, res){
    res.render('join.ejs')
})

router.post('/', function(req,res){
    var body = req.body;
    var email = body.email;
    var name = body.name;
    var password = body.password;
    //console.log(email);
    //mysql escape -> 보안을 위함
    var sql ={email: email, name: name, pw: password};
    //connection.query('insert into user(email, name, pw) values(?,?,?)', [email, name, password] , function(err, rows) {
    connection.query('insert into user set?', sql , function(err, rows) {  
    if (err) throw err;      
    res.render('welcome.ejs', {'name': name, 'id':rows.insertId})
    //res.redirect('/')
    });
})
module.exports = router;