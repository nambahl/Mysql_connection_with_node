const mysql= require("mysql");
var mysqlConnect= mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "godisgreat",
  database: "world",
  multipleStatements: true
});

mysqlConnect.connect(function(err){
  if(err){
    console.log("error");
  }
  else{
    console.log("connected");
  }
});

module.exports = mysqlConnect;
