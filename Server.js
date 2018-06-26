let express=require('express');

let bodyParser = require('body-parser');

let powershell = require('./runpower');

let app=express();

/*------------------Routing Started ------------------------*/

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json())

app.use(express.static('public'));



/*Handle Post Request*/
app.post('/',function(req,res){

 //Run Powershell Script
powershell();
 
console.log('Hello');
res.sendStatus(200);
 
});


/*--------------------Routing Over----------------------------*/

app.listen(3000,function(){

    console.log("Node is Running on Port 3000");

});
