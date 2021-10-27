var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const nodemailer = require('nodemailer');
const port = process.env.PORT || 3000



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
})

app.post('/joinus', (req,res)=>{
    const {Name ,Email,Age,WhatsappNo,TimeCommitment,WhyDoYouWantToJoin,HowWillYouContributeToTheOrganisation  } = req.body;
    
    var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'tvamevsahayakform@gmail.com',
       pass: 'tvamevsahayak'
     }
   });
   
   var mailOptions = {
     from: 'tvamevsahayakform@gmail.com',
     to: 'njha7189@gmail.com',
     subject: 'Tvamev Sahayak Joining Form New Response',
     text: `Name : ${Name}, 
	        Age : ${Age} 
			
                the organisation. I will work ${TimeCommitment} months. I want to join because ${WhyDoYouWantToJoin}.
                I will contribute to organisation as ${HowWillYouContributeToTheOrganisation}.
                WhatsApp No : ${WhatsappNo}  `
   };
   
   transporter.sendMail(mailOptions, (error, info)=>{
     if (error) {
       console.log(error);
     } else {
       console.log('Email sent: ' + info.response);
     }
   });
   res.redirect('/');
   
 })

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Listening on port ${port}`);
})