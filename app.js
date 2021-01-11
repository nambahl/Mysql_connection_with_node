
// //The commented section is for the connection pool
// const {
//   createPool
// }= require("mysql");
// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password:"godisgreat",
//   database: "world",
//   connectionLimit: 10
// })
// var country= "India";
// var information=pool.query('select * from country where Name = ?',[country],function(err,result,fields){
//   if(err){
//     return console.log(err);
//   }
//   return console.log(result);
// });
//
// module.exports= pool;

const express= require("express");
const bodyparser= require("body-parser");
const mysqlConnect = require("./connection");
const PeopleRoutes =require("./routes/country");
var app= express();
app.use(bodyparser.json());
app.use("/country",PeopleRoutes);

app.listen(3000);
