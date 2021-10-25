var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const port = 3000



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
}).listen(port)


console.log(`Listening on port ${port}`);
