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

    const time = ['8-9 hours per week','7-6 hours per week','5-4 hours per week','Less than 2 hours'];
    
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
     Age : ${Age},
     Email : ${Email},
     WhatsApp No : ${WhatsappNo},
     How much time are you ready to dedicate to the organisation : ${time[TimeCommitment-1]},
     Why do you want to join? : ${WhyDoYouWantToJoin},
     How will you contribute to the organisation? : ${HowWillYouContributeToTheOrganisation}    
           `
   };
   
   transporter.sendMail(mailOptions, (error, info)=>{
     if (error) {
       console.log(error);
       res.redirect('/pages/contact.html?msg=no')
      } else {
        console.log('Email sent: ' + info.response);
        res.redirect('/pages/contact.html?msg=yes')
     }
   });

  //  res.redirect('/');
   
 })

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Listening on port ${port}`);
})