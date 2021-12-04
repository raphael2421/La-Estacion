const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');

// async..await is not allowed in global scope, must use a wrapper
const enviarCorreo = async (paramsObj) => {
   //  si no trae correo no hace nada 
   if (Object.is(paramsObj.fc_email, undefined) === true || paramsObj.fc_email === '') {
      // console.log('enviarCorreo::');
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
   const fc_refURL = paramsObj._refURL;
   const fc_refID = paramsObj._refID;
   const fc_nombre = paramsObj.nombre;
   const fc_telefono = paramsObj.telefono || '';
   const fc_email = paramsObj.correo;
   const fc_via_comunicacion = paramsObj.pref_contacto;
   const fc_horario = paramsObj.horario_atencion;
   const emailCCO = process.env.SMTP_EMAIL;
   // const emailCCO = 'tech.manager@royalhome.mx';
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
             from: `Royal Home <${process.env.MAIL_FROM}>`, // sender address
             bcc: 'informes@royalhome.mx',
             subject: `Gracias ${fc_nombre}`, // Subject line
             text: `¡Gracias por visitarnos y ser parte de una experiencia Royal Home!
Ahora formas parte de nuestros clientes distinguidos, recibirás de primera mano toda la información acerca de nuestros desarrollos, invitaciones exclusivas para asistir a nuestros eventos y vivir la magia de San Miguel de Allende con Royal Home.`, // plain text body
             // attachments: paramsObj.attachments,
             html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <style type="text/css">
    @media screen {
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 300;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKruRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnPKruQg.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5VflQ.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9E4kDNxMZdWfMOD5Vfkw.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 500;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKvuRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnZKvuQg.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 700;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3uRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnLK3uQg.woff') format('woff');
      }
      @font-face {
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 800;
        src: local(''),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7uRA.woff2') format('woff2'),
        url('https://fonts.gstatic.com/s/firasans/v10/va9B4kDNxMZdWfMOD5VnMK7uQg.woff') format('woff');
      }
    }
  </style>
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    .ReadMsgBody,
    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
      line-height: 100%;
    }

    div[style*="margin: 14px 0"],
    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    table,
    td {
      mso-table-lspace: 0;
      mso-table-rspace: 0;
    }

    table,
    tr,
    td {
      border-collapse: collapse;
    }

    body,
    td,
    th,
    p,
    div,
    li,
    a,
    span {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      mso-line-height-rule: exactly;
    }

    img {
      border: 0;
      outline: none;
      line-height: 100%;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100% !important;
      -webkit-font-smoothing: antialiased;
    }

    .pc-gmail-fix {
      display: none;
      display: none !important;
    }

    @media screen and (min-width: 621px) {
      .pc-email-container {
        width: 620px !important;
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:620px) {
      .pc-sm-p-20 {
        padding: 20px !important
      }
      .pc-sm-p-24-20-30 {
        padding: 24px 20px 30px !important
      }
      .pc-sm-p-21-10-14 {
        padding: 21px 10px 14px !important
      }
      .pc-sm-h-20 {
        height: 20px !important
      }
      .pc-sm-mw-100pc {
        max-width: 100% !important
      }
    }
  </style>
  <style type="text/css">
    @media screen and (max-width:525px) {
      .pc-xs-p-10 {
        padding: 10px !important
      }
      .pc-xs-p-15-10-20 {
        padding: 15px 10px 20px !important
      }
      .pc-xs-h-100 {
        height: 100px !important
      }
      .pc-xs-br-disabled br {
        display: none !important
      }
      .pc-xs-fs-30 {
        font-size: 30px !important
      }
      .pc-xs-lh-42 {
        line-height: 42px !important
      }
      .pc-xs-p-5-0 {
        padding: 5px 0 !important
      }
    }
  </style>
  <!--[if mso]>
    <style type="text/css">
        .pc-fb-font {
            font-family: Helvetica, Arial, sans-serif !important;
        }
    </style>
    <![endif]-->
  <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
</head>
<body style="width: 100% !important; margin: 0; padding: 0; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; background-color: #f4f4f4" class="">
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px; color: #151515;">Ahora formas parte de nuestros clientes distinguidos.</div>
  <div style="display: none !important; visibility: hidden; opacity: 0; overflow: hidden; mso-hide: all; height: 0; width: 0; max-height: 0; max-width: 0; font-size: 1px; line-height: 1px;">
    ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
  </div>
  <table class="pc-email-body" role="presentation" style="table-layout: fixed;" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#f4f4f4">
    <tbody>
      <tr>
        <td class="pc-email-body-inner" valign="top" align="center">
          <!--[if gte mso 9]>
            <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                <v:fill type="tile" src="" color="#f4f4f4"/>
            </v:background>
            <![endif]-->
          <!--[if (gte mso 9)|(IE)]><table width="620" align="center" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="620" align="center" valign="top"><![endif]-->
          <table class="pc-email-container" role="presentation" style="margin: 0 auto; max-width: 620px;" width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
            <tbody>
              <tr>
                <td style="padding: 0 10px;" valign="top" align="left">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 1px; line-height: 1px;" height="20">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td valign="top">
                          <!-- BEGIN MODULE: Menu 1 -->
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="pc-sm-p-20 pc-xs-p-10" style="padding: 25px 30px; background-color: #0e1f2e" valign="top" bgcolor="#0e1f2e">
                                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="padding: 10px;" valign="top" align="center">
                                          <a href="https://royalhome.mx" style="text-decoration: none;"><img src="https://www.laestacionresidence.mx/images/royalhome-Isw.png" alt="Royal Home" style="max-width: 100%; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; color: #ffffff; font-size: 14px" width="180" height="56"></a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!-- END MODULE: Menu 1 -->
                          <!-- BEGIN MODULE: Header 1 -->
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="font-size: 1px; line-height: 1px;" height="8">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="background-color: #1B1B1B; background-image: url('https://www.laestacionresidence.mx/images/PROYECTO5-sZW.jpg'); background-repeat: no-repeat; background-position: center; background-size: cover" valign="top" bgcolor="#1B1B1B" background="https://www.laestacionresidence.mx/images/PROYECTO5-sZW.jpg">
                                  <!--[if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                <v:fill type="frame" src="https://www.laestacionresidence.mx/images/PROYECTO5-sZW.jpg" color="#1B1B1B"></v:fill>
                <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                    <div style="font-size: 0; line-height: 0;">
                        <table width="600" border="0" cellpadding="0" cellspacing="0" role="presentation" align="center">
                            <tr>
                                <td style="font-size: 14px; line-height: 1.5;" valign="top">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                        <tr>
                                            <td colspan="3" height="24" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td width="30" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            <td valign="top" align="left">
            <![endif]-->
                                  <!--[if !gte mso 9]><!-->
                                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td class="pc-sm-p-24-20-30 pc-xs-p-15-10-20" style="padding: 24px 30px 40px;" valign="top">
                                          <!--<![endif]-->
                                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                            <tbody>
                                              <tr>
                                                <td style="padding: 10px;" valign="top">
                                                  <a href="http://example.com" style="text-decoration: none;"><img src="https://www.laestacionresidence.mx/images/crown-D4s.png" alt="" style="max-width: 100%; height: auto; border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #ffffff;" width="48" height=""></a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td class="pc-xs-h-100" style="line-height: 1px; font-size: 1px" height="30">&nbsp;</td>
                                              </tr>
                                              <tr>
                                                <td class="pc-xs-fs-30 pc-xs-lh-42 pc-fb-font" style="padding: 13px 10px 0; letter-spacing: -0.7px; line-height: 46px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 800; color: #ffffff" valign="top">¡Gracias por ser parte <br>de una experiencia Royal Home!</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                          <!--[if !gte mso 9]><!-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--<![endif]-->
                                  <!--[if gte mso 9]>
                                            </td>
                                            <td width="30" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td colspan="3" height="40" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </v:textbox>
            </v:rect>
            <![endif]-->
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!-- END MODULE: Header 1 -->
                          <!-- BEGIN MODULE: Footer 1 -->
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td style="font-size: 1px; line-height: 1px;" height="8">&nbsp;</td>
                              </tr>
                            </tbody>
                          </table>
                          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                              <tr>
                                <td class="pc-sm-p-21-10-14 pc-xs-p-5-0" style="padding: 21px 20px 14px 20px; background-color: #0e1f2e" role="presentation" valign="top" bgcolor="#0e1f2e">
                                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody>
                                      <tr>
                                        <td style="font-size: 0;" valign="top">
                                          <!--[if (gte mso 9)|(IE)]><table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation"><tr><td width="280" valign="top"><![endif]-->
                                          <div class="pc-sm-mw-100pc" style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr>
                                                  <td style="padding: 20px;" valign="top">
                                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                      <tbody>
                                                        <tr>
                                                          <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 0px; font-weight: 500; line-height: 24px; letter-spacing: -0.2px; color: #ffffff" valign="top"></td>
                                                        </tr>
                                                        <tr>
                                                          <td style="line-height: 1px; font-size: 1px;" height="11">&nbsp;</td>
                                                        </tr>
                                                      </tbody>
                                                      <tbody>
                                                        <tr>
                                                          <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 20px; letter-spacing: -0.2px; color: #D8D8D8" valign="top">Ahora formas parte de nuestros clientes distinguidos, recibirás de primera mano toda la información acerca de nuestros desarrollos, invitaciones exclusivas para asistir a nuestros eventos y vivir la magia de San Miguel de Allende con Royal Home.</td>
                                                        </tr>
                                                        <tr>
                                                          <td class="pc-sm-h-20" style="line-height: 1px; font-size: 1px;" height="56">&nbsp;</td>
                                                        </tr>
                                                      </tbody>
                                                      <tbody>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <!--[if (gte mso 9)|(IE)]></td><td width="280" valign="top"><![endif]-->
                                          <div class="pc-sm-mw-100pc" style="display: inline-block; width: 100%; max-width: 280px; vertical-align: top;">
                                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                              <tbody>
                                                <tr>
                                                  <td style="padding: 20px;" valign="top">
                                                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                                      <tbody>
                                                        <tr>
                                                          <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 0px; font-weight: 500; line-height: 24px; letter-spacing: -0.2px; color: #ffffff" valign="top"></td>
                                                        </tr>
                                                        <tr>
                                                          <td style="line-height: 1px; font-size: 1px" height="11">&nbsp;</td>
                                                        </tr>
                                                      </tbody>
                                                      <tbody>
                                                        <tr>
                                                          <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 20px; letter-spacing: -0.2px; color: #D8D8D8" valign="top"></td>
                                                        </tr>
                                                        <tr>
                                                          <td class="pc-sm-h-20" style="line-height: 1px; font-size: 1px;" height="45">&nbsp;</td>
                                                        </tr>
                                                      </tbody>
                                                      <tbody>
                                                        <tr>
                                                          <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 500; line-height: 24px; letter-spacing: -0.2px;" valign="top">
                                                            <a href="tel:+52 477 578 2748" style="text-decoration: none; color: #ffffff;">477 578 2748</a>
                                                          </td>
                                                        </tr>
                                                        <tr>
                                                          <td style="line-height: 1px; font-size: 1px;" height="9">&nbsp;</td>
                                                        </tr>
                                                      </tbody>
                                                      <tbody>
                                                        <tr>
                                                          <td class="pc-fb-font" style="font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 500; line-height: 24px;" valign="top">
                                                            <a href="mailto:informes@royalhome.mx" style="text-decoration: none; color: #c5bba9">informes@royalhome.mx</a>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </div>
                                          <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!-- END MODULE: Footer 1 -->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td style="font-size: 1px; line-height: 1px;" height="20">&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!-- Fix for Gmail on iOS -->
  <div class="pc-gmail-fix" style="white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
</body>
</html>`
          };
          mailBody['to'] = fc_email;
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