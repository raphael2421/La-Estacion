const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');

// async..await is not allowed in global scope, must use a wrapper
const enviarCorreo = async (paramsObj) => {
   //  si no trae correo no hace nada 
   if (Object.is(paramsObj.email, undefined) === true || paramsObj.email === '') {
      console.log('enviarFactura::');
      paramsObj.email = paramsObj.data.email;
   }

   // create reusable transporter object using the default SMTP transport
   const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORTSSL,
      secure: true, // true for 465, false for other ports
      auth: {
         user: process.env.SMTP_EMAIL,
         pass: process.env.SMTP_PASS,
      }
   });

   let emailTemplate;
   const serie = paramsObj.data._id.toString().slice(0, 12);
   const folio = paramsObj.data._id.toString().slice(-12);
   const logo = paramsObj.logo;
   const data = paramsObj.data;
   const urlTicket = paramsObj.urlTicket;
   ///
   ejs.renderFile(path.join(__dirname, `../views/emails/factura.ejs`), {
      serie,
      folio,
      logo,
      data,
      urlTicket
   })
      .then(async (result) => {
         emailTemplate = result;

         // crear el mensaje a enviar
         const mailBody = {
            from: `${process.env.MAIL_NAME} <${process.env.MAIL_FROM}>`, // sender address
            subject: paramsObj.asunto, // Subject line
            text: paramsObj.mensaje, // plain text body
            attachments: paramsObj.attachments,
            html: emailTemplate // html body
         };
         mailBody['to'] = paramsObj.email;
         // envia el correo
         let info = await transporter.sendMail(mailBody);
         console.log("Message sent ID: %s, and response: %s", info.messageId, info.response); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>


         //res.send(emailTemplate);
      })
      .catch(err => {
         console.log("Error Rendering emailTemplate");
         console.log(err);
      });

} /// end

/// exports
module.exports = enviarCorreo;
/*
[{
   filename: 'factura.zip',
   content: new Buffer('hello world!', 'utf-8') // paramsObj.zip
}]
*/

// https://imgbox.com/yha6wFA7
// https://imgbox.com/dRxMOZfW