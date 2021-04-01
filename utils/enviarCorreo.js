const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');

// async..await is not allowed in global scope, must use a wrapper
const enviarCorreo = async (paramsObj) => {
   //  si no trae correo no hace nada 
   if (Object.is(paramsObj.fc_email, undefined) === true || paramsObj.fc_email === '') {
      console.log('enviarFactura::');
      paramsObj.fc_email = paramsObj.fc_email;
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
   const fc_nombre = paramsObj.fc_nombre;
   const fc_telefono = paramsObj.fc_telefono || '';
   const fc_email = paramsObj.fc_email;
   const fc_via_comunicacion = paramsObj.fc_via_comunicacion;
   const fc_horario = paramsObj.fc_horario;
   const emailCCO = process.env.SMTP_EMAIL;
   ///

   /*
   ejs.renderFile(path.join(__dirname, `../views/emails/factura.ejs`), {
      fc_nombre,
      fc_telefono,
      fc_email,
      fc_via_comunicacion,
      fc_horario
   })
      .then(async (result) => {
         emailTemplate = result;

         // crear el mensaje a enviar
         const mailBody = {
            from: `${process.env.MAIL_NAME} <${process.env.MAIL_FROM}>`, // sender address
            bcc: 'informes@royalhome.mx',
            subject: paramsObj.asunto, // Subject line
            text: paramsObj.mensaje, // plain text body
            // attachments: paramsObj.attachments,
            // html: emailTemplate // html body
         };
         mailBody['to'] = paramsObj.fc_email;
         // envia el correo
         let info = await transporter.sendMail(mailBody);
         console.log("Message sent ID: %s, and response: %s", info.messageId, info.response); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>


         //res.send(emailTemplate);
      })
      .catch(err => {
         console.log("Error Rendering emailTemplate");
         console.log(err);
      });

       end render */

       try {
          // crear el mensaje a enviar
          const mailBody = {
             from: `${process.env.MAIL_NAME} <${process.env.MAIL_FROM}>`, // sender address
            //  bcc: 'informes@royalhome.mx',
             subject: 'Solicitud informes', // Subject line
             text: `datos: nombre:${fc_nombre}, tel:${fc_telefono}, mail:${fc_email}, via de comunicacion:${fc_via_comunicacion}, horario:${fc_horario}, _refURL${fc_refURL}, _refID: ${fc_refID}`, // plain text body
             // attachments: paramsObj.attachments,
             // html: emailTemplate // html body
          };
          mailBody['to'] = emailCCO;
          // envia el correo
          let info = await transporter.sendMail(mailBody);
          console.log("Message sent ID: %s, and response: %s", info.messageId, info.response); // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          
       } catch (error) {
          console.log(error);
       }

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