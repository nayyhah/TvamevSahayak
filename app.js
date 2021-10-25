var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));


app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('public/index.html');
}).listen(3000)


console.log(`Server running at http://localhost:3000`);
