exports.index = function(req,res){
    
   // res.send("<H1>Hello </H1>Express");
   res.render('default', {
       
       
       title: 'Home',
       classname: 'home',
       users: ['ray', 'mur', 'sam']
       
       
       
   });
    

}



exports.about = function(req,res){
    
      res.render('default', {
       
       
       title: 'About Us',
       classname: 'about'
       
       
       
       
   });
    

}


exports.name = function(req,res){
    
    var name = req.params.name;
    
    res.send(name + " was here");
    

}


exports.title = function(req,res){
    
    var name = req.params.name;
    var title = req.params.title;
    
    res.send("<p> name: " + name + " <br>title: " + title + "</p>");
    

}


exports.bad = function(req,res){
    
  
    
    res.send("Bad route");
    

}
