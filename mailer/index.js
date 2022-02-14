const models=require("../model/datamodel")
const fs=require('fs')
const path=require("path")
const nodemailer = require("nodemailer");
const Handlebars = require("handlebars");


const sendingEmail = async (email, id,token) => {
  let path_dir = path.join(__dirname, "./page.html");

  const data = fs.readFileSync(path_dir, { encoding: "utf8" });

  var template = Handlebars.compile(data);
  var replacement = {id,token};
  var result = template(replacement);

  smtpTrans = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ishabharti.eminence@gmail.com",
      pass: "etemi123@#",
    },
  });
  let mailOptions = {
    from: "ishabharti.eminence@gmail.com",
    to: email,
    subject: "Password Reset",

    html: result,
  };
  await smtpTrans.sendMail(mailOptions, function (err, response) {
    if (err) {
      console.log(err);
      // console.log(send({status:404,message:"here as an some error"})
    } else {
      // res.send('success', 'An e-mail has been sent to  with further instructions.');
      console.log("sent");
    }
  });
};

module.exports = { sendingEmail };