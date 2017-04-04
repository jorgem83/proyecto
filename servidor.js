var express = require('express');
var app = express();

app.use(express.static('public'))

app.get('/',function(req, res){
    res.sendFile(__dirname +'/public/index.html')

})

app.get('/devolerusuario',function(req,res){
    var usuario ={usernaem:'jorge',password:'123456'};
       res.send(usuario)
})

var server = app.listen(8081, function(){
    console.log("servidor arriba")
})
