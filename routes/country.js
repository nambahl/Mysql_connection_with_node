const express= require("express");
const Router= express.Router();
const mysqlConnect = require("../connection");
Router.get("/",function(req,res){
  mysqlConnect.query('SELECT * from country',function(err,rows,fields){
    if(err){
      console.log(rows);
    }
    else{
      console.log(err);
    }
  });
});

module.exports= Router;
