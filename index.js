// reqs
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');
const xss = require('xss-clean');
const cookie = require('cookie-parser');
const cors = require('cors');
const hpp = require('hpp');
const rate_limit = require('express-rate-limit');
const setCache = require('./middleware/cache');
// mongo
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useFindAndModify: true
})
    .then(() => { console.log('mongo conected')})
    .catch(err =>{ console.log('Unable to connect mongo '+ err)});


// templating
app.set('view engine', 'ejs');

// middlewares
app.use(setCache)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookie());
app.use(hpp());
app.use(xss());
// app.use(helmet());
const limit = rate_limit({
   windowMs: 10 * 60 * 1000,
   max: 1000
});
app.use(limit);

// SSL
if(process.env.NODE_ENV === 'production') {
   app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
         res.redirect(`https://${req.header('host')}${req.url}`)
      else
         next()
   })
}

// api routers
app.use('/api/v1/fomra_contacto', require('./routes/api/formaContacto'));
app.use('/api/v1/forma_contacto', require('./routes/api/formaContacto'));
app.use('/api/v1/blog', require('./routes/api/blog'));
app.use('/api/v1/referals', require('./routes/api/referal'));
// routes
app.use('/evento', require('./routes/evento'));
app.use('/vive-la-estacion', require('./routes/galeria'));
app.use('/quienes-somos', require('./routes/qSomos'));
app.use('/proyecto', require('./routes/proyecto'));
app.use('/departamentos', require('./routes/departamentos'));
app.use('/beneficios', require('./routes/beneficios'));
app.use('/ubicacion', require('./routes/ubicacion'));
app.use('/aviso-de-privacidad', require('./routes/privacidad'));
app.use('/', require('./routes/inicio'));
// app.use('/404', require('./routes/404'));


// static folder
app.use(express.static(path.join(__dirname, 'public')));
// handle wrong urls
// app.use('/*', require('./routes/wrongUrls'));

// server start
app.listen(process.env.PORT || 3000, () => {
   console.log('node start', process.env.PORT || 3000);
});

////////////////
