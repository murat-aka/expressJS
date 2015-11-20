var express = require("express");
var app = express();


app.get("/", function(req,res){
    
    res.send("<H1>Hello </H1>Express");
    

});



app.get("/me", function(req,res){
    
    res.send("new route me");
    

});


app.get("/who/:name?", function(req,res){
    
    var name = req.params.name;
    
    res.send(name + " was here");
    

});


app.get("/who/:name?:title?", function(req,res){
    
    var name = req.params.name;
    var title = req.params.title;
    
    res.send(name + " was here");
    

});



var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);


});