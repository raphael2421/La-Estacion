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

// templating
app.set('view engine', 'ejs');
// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(cookie());
app.use(hpp());
app.use(xss())
// app.use(helmet());
const limit = rate_limit({
   windowMs: 10 * 60 * 1000,
   max: 2000
});
app.use(limit);


// routes
app.use('/', require('./routes/inicio'));
app.use('/vive-la-estacion', require('./routes/galeria'));
app.use('/quienes-somos', require('./routes/qSomos'));
app.use('/proyecto', require('./routes/proyecto'));
app.use('/beneficios', require('./routes/beneficios'));
app.use('/ubicacion', require('./routes/ubicacion'));
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
