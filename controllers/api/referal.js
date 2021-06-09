const asyncHandler = require('../../middleware/asyncHandler');
const Referal = require('../../models/Referal');
// importa utilidad extends Error
const ErrorResponse = require('../../utils/errorResponse');
// enviar correo con token
// const mailPassword = require('../utils/mailPassword')
// crypto
// const crypto = require('crypto');

//@name:      login
//@route:     /api/v1/users/login
//@method:    POST
//@access:    Public
exports.userLogin = asyncHandler(async (req, res, next) => {

   const { correo, password } = req.body;
   // validate correo and pass
   if (!(correo || password)) {
      // return next(new ErrorResponse(`Falto correo o password`, 400));
   }
   // check user
   const user = await Referal.findOne({ correo }).select('+password');
   if (!user) {
      // return next(new ErrorResponse(`Usuario o contraseña incorrectos`, 401));
   }
   // password match
   const isMatch = await user.matchPassword(password);

   if (!isMatch) {
      res.status(401).json({
         success: false,
         msg: 'Datos incorrectos',
      })
   }

   // send response and cookie
   // sendCookieToken(user, 200, res);

   // create token
   const token = user.getJwtToken();

   // send response
   res.status(200).json({
      success: true,
      msg: 'Bienvenido '+user.nombre,
      token
   })
   
}); // userLogin end...

//@name:      Crear referal link
//@route:     /api/v1/referals
//@method:    POST
//@access:    Public
exports.refCrear = asyncHandler( async (req, res, next) => {

   const referal = await Referal.create(req.body);

   // responde con el token
   res.status(201).json({
      success: true,
      msg: 'Enlace de referidos creado',
   });
   
}); // referalCrear end...

//@name:      Modificar usuario
//@route:     /api/v1/users/actualizar
//@method:    POST
//@access:    Private
exports.userUpdate = async (req, res, next) => {
   //comienza aquí
   
} // userUpdate end...

//@name:      borrar usuario
//@route:     /api/v1/users/borrar
//@method:    POST
//@access:    Private
exports.userBorrar = async (req, res, next) => {
   //comienza aquí
   
} // userBorrar end...


//////////////////////////////////////////////////////////////////
// importa el modelo 
// const Referal = require('../models/Referal');
// // importa el middleware Async Handler
// const asyncHandler = require('../middleware/asyncHandler')
// // importa utilidad extends Error
// const ErrorResponse = require('../utils/errorResponse');
// // enviar correo con token
// const mailPassword = require('../utils/mailPassword')
// // crypto
// const crypto = require('crypto');

// @desc    Return all Users
// @route   POST /api/v1/auth/users
// @access  Public
exports.refAll = asyncHandler(async (req, res, next) => {
   const users = await Referal.find().populate({
      path: '_leads'
   }); //.select('+password +role');

   
   res.status(200).json({
       success: true, data: users
      }
      )
});

// @desc    Login Referal
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = asyncHandler(async (req, res, next) => {

}) // Login user

// get token from model, create cookie and send response
const sendCookieToken = (user, status, res)=>{
   //token
   const token = user.getJwtToken();
   // fecha actual
   const now = new Date()
   // options
   const options = {
      expires: new Date(now.setDate(now.getDate() + 1)),
      httpOnly: true,
      // secure: true
   };

   // res
   res.status(status)
      .cookie('token', token, options)
   .json({
      success: true,
      msg: `Bienvenido ${user.nombre}`,
      token
   })
}

// @desc    Get current Loged Referal
// @route   POST /api/v1/auth/miperfil
// @access  Private
exports.miPerfil = asyncHandler(async (req, res, next)=>{
   const user = await Referal.findById(req.user.id).select('+role').populate({
      path: '_empresas',
      select: 'razon_social rfc logo'
   });

   res.status(200).json({
      success: true,
      data: user
   })
}); // miPerfil

// @desc    Actualiza perfil del usuario
// @route   PUT /api/v1/auth/updateProfile
// @access  Private
exports.updateProfile = asyncHandler(async (req, res, next)=>{
   // busca usuario
   const user = await Referal.findById(req.user.id).select('+password');

   // verifica que sea el mismo password
   const isMatch = await user.matchPassword(req.body.passwordActual);
   if (!isMatch) {
      return next(new ErrorResponse(`Contraseña incorrecta`, 401))
   }

   // elimino los campos que no se van a actualizar
   const field = {
      nombre: req.body.nombre,
      email: req.body.email,
      password: req.body.password
   };
   // console.log('field', field);
   // elimino los que estan vacios ejemplo: password sin cambiar
   for (const key in field){
      if (Object.is(field[key], undefined) === false) {
         // delete field[key];
         // console.log('fieldsToUpdate2', key, field[key]);
         user[key] = field[key];
         // console.log('newUser', user);
      }
   } // for in

   await user.save();
   // send response and cookie
   sendCookieToken(user, 200, res);

   // res.status(200).json({
   //    success: true,
   //    data: user
   // })
}); // updateProfile


// @desc    Log out Referal
// @route   GET /api/v1/auth/logout
// @access  Private
exports.logout = asyncHandler(async (req, res, next)=>{
 
   // fecha actual
   const now = new Date()
   // options
   const options = {
      expires: now,
      httpOnly: true,
      // secure: true
   };

   res.status(200).cookie('token', 'false', options).json({
      success: true,
      data:'logedout'
   })
}); // logout

// @desc    get a token to reset password
// @route   POST /api/v1/auth/resetPassword
// @access  Public
exports.getPasswordToken = asyncHandler(async (req, res, next)=>{
   // buscamos el user
   const user = await Referal.findOne({email: req.body.email});

   // checa si el user existe
   if (!user) {
      return next(new ErrorResponse('Se envío un mensaje a tu correo', 200));
   }

   // genera el reset token
   const resetToken = user.getResetPassword();
   // guarda el token en mongo
   await user.save({validateBeforeSave: false});

   // creo url del ticket
   const urlToken = `${req.protocol}://${req.get('host')}/api/v1/auth/resetPassword/?token=${resetToken}`;
   // envia correo
   mailPassword({
      email: req.body.email,
      asunto: 'Cambio de contraseña',
      mensaje: `Alguien solicito cambiar tu contraseña, si no fuiste tú ignora este correo y comunicate con nosotros, para completar el cambio de contraseña visita el siguiente enlace ${urlToken}`,
      urlToken
   });

   res.status(200).cookie('token', 'false', {httpOnly: true,}).json({
      success: true,
      msg: 'Se envío un mensaje a tu correo',
      token: 'sera valido por 6 minutos'
   })
}); // resetPasswordToken

// @desc    check token in mongo
// @route   GET /api/v1/auth/resetPassword
// @access  Public
exports.checkPassToken = asyncHandler(async (req, res, next) => {
   // hash token para que coincida con el que guardamos
   const token = crypto.createHash('sha256').update(req.query.token).digest('hex');
   // buscamos el user
   const user = await Referal.findOne({ resetPasswordToken: token, resetPasswordExpire: {$gte: Date.now()} });

   // checa si el user existe
   if (!user) {
      return next(new ErrorResponse('Token invalido', 200));
   }

   res.status(200).cookie('token', 'false', { httpOnly: true, }).json({
      success: true,
      msg: 'token-valido'
   })
}); // checkPassToken

// @desc    Reset lost password
// @route   PUT /api/v1/auth/resetPassword
// @access  Public
exports.newPassword = asyncHandler(async (req, res, next) => {
   // hash token para que coincida con el que guardamos
   const token = crypto.createHash('sha256').update(req.query.token).digest('hex');
   // buscamos el user
   const user = await Referal.findOne({ resetPasswordToken: token, resetPasswordExpire: { $gte: Date.now() } });

   // checa si el user existe
   if (!user) {
      return next(new ErrorResponse('Token invalido', 200));
   }

   //nuevo password
   user.password = req.body.password;
   user.resetPasswordToken = undefined;
   user.resetPasswordExpire = undefined;
   await user.save();

   sendCookieToken(user, 200, res);
}); // resetPasswordToken