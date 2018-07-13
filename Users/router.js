var express = require('express');
var app = express();
var router = express.Router();
var path = require("./../paths");
var bodyParser = require('body-parser');
var controllersLogin = require("./controllersLogin");
var controllersLogged = require('./controllerLogged');
var controllersPersonal = require('./controllersPersonal');

router.post("/login" , bodyParser.urlencoded({ extended: false }), function(req,res){
    var requestBody = req.body;
    controllersLogin.findUser(requestBody , function(err,result){
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

router.post("/loggedIn" , bodyParser.urlencoded({ extended: false }), function(req,res){
    var requestBody = req.body;
    controllersLogged.loginUser(requestBody , function(err,result){
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

router.get("/getUser" , function(req,res){
    controllersLogged.getUser(function(err,result){
        res.send(result);
    });
})

router.post("/Gopersonal" , bodyParser.urlencoded({ extended: false }), function(req,res){
    var requestBody = req.body;
    controllersPersonal.insertChat(requestBody , function(err,result){
        res.send(result);
    });
})

router.post("/signup" ,bodyParser.urlencoded({ extended: false }), function(req,res){
    var requestBody = req.body;
    controllersLogin.create(requestBody , function(err,result){
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
})




module.exports = router;