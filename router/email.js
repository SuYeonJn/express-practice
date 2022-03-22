var express = require('express')
var router = express.Router();
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
router.post('/form', function(req, res){
    //var email = req.body.email;
   // res.send(`Welcome! ${email}`)
   res.render('email.ejs', {'email': req.body.email})
})

router.post('/ajax', function(req, res){
    // console.log(req.body.email);
    // var responseData = {'result': 'ok', 'email' : req.body.email}
    var email = req.body.email;
    var responseData = {};
    
    connection.query('SELECT name from user where email="'+ email +'"', function(err, rows) {
        if (err) throw err;
        if(rows[0]) {
            responseData.result = "ok";
            responseData.name = rows[0].name;
            //console.log( rows[0].name);
        } else {
            responseData.result = "none";
            responseData.name = "none";
            //console.log('none : ' + rows[0])
        }
        res.json(responseData)
    });
    })

    module.exports = router;