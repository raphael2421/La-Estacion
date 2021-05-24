const fechaMX = require('../utils/fechaMX');

//@name:      ubicación
//@route:     /ubicacion
//@access:    Public 
exports.renderUbicacion = async (req, res, next) => {
   // console.log(req.query._refID || '');

   //refid
   const refid = req.query._refID;
   // fecha 
   const now = new Date()
   // options
   const options = {
      expires: new Date(now.setDate(now.getDate() + 1000)),
      httpOnly: false,
      secure: true
   };
   // res
   if (!Object.is(refid, undefined)) {
      res.cookie('refid', refid, options).setHeader(
         'Content-Security-Policy',
         "script-src 'self' 'unsafe-inline' http: https: 'strict-dynamic' 'sha256-yFgv3z+LPPZGWnp8mklPx/bNgMGQvpW8j1E3j8DABBI=' 'sha256-R/CAGqFl6mgfyijXO4RVSoiPYelEM4FX6oiLbfIAhQ8=' 'sha256-Z/J+GXilQFq6xrxWRqMxEnjc9k+nD3SWlIhWtr/920o=' 'sha256-eaRhvxD1NyP8b9GsCnJn4shBsc7mJmqH8vusmC6VJrs=' 'sha256-UqBuXIEga/coJdYYBMLGoC8vG/Za/jH7XA7N3JgGLQU=' 'sha256-y/x/MEegkEAarGJx0JVs1TcRBlsB8ABeYbeVqXUTQww=' 'sha256-9st1it3HjX55/UI0Vqz0Tl/7iz21RqeoQXfh2iGcJ6w=' 'sha256-W0a8aIuVCmQn8oz57RuRVW+DwfaJ4eal3RgVmoD3R5I=' 'sha256-eiVXvVIzIGgXW0dqan0l3q/zzaBxp7ftvN3ItZbVCow=' 'sha256-rpOJNjc+ia4P6xoNnddMg9VlxY3FKnBS8N+xY13d9qE=' 'sha256-OPcfHtPh80TIJmkOyhoG8muyXN5+Lr/36+NohVSyYZU=' 'sha256-x6eHFnaYivXydNuOLon2nOwobYLqGeaNPZoJn+rGeww=' 'sha256-tgsvWEKdHa+K1dbe31cTHrLDMEQvDRM1DZ5ZaPgQunc=' 'sha256-vAV2bURLt/JgX3yhHHFk59ftlwug6ajNi0BDeZ5xY/I=' 'sha256-3Rhtk6WB13qlfhy6j9R76XsQjlVEbMREmvsAhxKHXuY=' 'sha256-1m6rLolyKk8nxXLS/4NONRHIizpICS8ad3r+V+BPQR4=' 'sha256-AwXvj82EbEIwqhiA+5sEANnMJJN/K8Ea1QFcO82fFuE=' 'sha256-2AO2UkKomIvLTU+VO9rQzSNCSk22UXRXNb2nOMvamA8=' 'sha256-ZpiJwzmJgKrNO8CQS4N8ak1zr31hLKtn/NDswRxHurk='"
         
      ).status(200).render('ubicacion', {
         path: '/ubicacion',
         page: 'Ubicación',
         fechaMX: await fechaMX(),
         _refID: req.query._refID || '',
         _refURL: req.headers.referer || ''
      });
   }
      else{
      res.status(200).setHeader(
         'Content-Security-Policy',
         "script-src 'self' 'unsafe-inline' http: https: 'strict-dynamic' 'sha256-yFgv3z+LPPZGWnp8mklPx/bNgMGQvpW8j1E3j8DABBI=' 'sha256-R/CAGqFl6mgfyijXO4RVSoiPYelEM4FX6oiLbfIAhQ8=' 'sha256-Z/J+GXilQFq6xrxWRqMxEnjc9k+nD3SWlIhWtr/920o=' 'sha256-eaRhvxD1NyP8b9GsCnJn4shBsc7mJmqH8vusmC6VJrs=' 'sha256-UqBuXIEga/coJdYYBMLGoC8vG/Za/jH7XA7N3JgGLQU=' 'sha256-y/x/MEegkEAarGJx0JVs1TcRBlsB8ABeYbeVqXUTQww=' 'sha256-9st1it3HjX55/UI0Vqz0Tl/7iz21RqeoQXfh2iGcJ6w=' 'sha256-W0a8aIuVCmQn8oz57RuRVW+DwfaJ4eal3RgVmoD3R5I=' 'sha256-eiVXvVIzIGgXW0dqan0l3q/zzaBxp7ftvN3ItZbVCow=' 'sha256-rpOJNjc+ia4P6xoNnddMg9VlxY3FKnBS8N+xY13d9qE=' 'sha256-OPcfHtPh80TIJmkOyhoG8muyXN5+Lr/36+NohVSyYZU=' 'sha256-x6eHFnaYivXydNuOLon2nOwobYLqGeaNPZoJn+rGeww=' 'sha256-tgsvWEKdHa+K1dbe31cTHrLDMEQvDRM1DZ5ZaPgQunc=' 'sha256-vAV2bURLt/JgX3yhHHFk59ftlwug6ajNi0BDeZ5xY/I=' 'sha256-3Rhtk6WB13qlfhy6j9R76XsQjlVEbMREmvsAhxKHXuY=' 'sha256-1m6rLolyKk8nxXLS/4NONRHIizpICS8ad3r+V+BPQR4=' 'sha256-AwXvj82EbEIwqhiA+5sEANnMJJN/K8Ea1QFcO82fFuE=' 'sha256-2AO2UkKomIvLTU+VO9rQzSNCSk22UXRXNb2nOMvamA8=' 'sha256-ZpiJwzmJgKrNO8CQS4N8ak1zr31hLKtn/NDswRxHurk='"
      ).render('ubicacion', {
            path: '/ubicacion',
            page: 'Ubicación',
            fechaMX: await fechaMX(),
            _refID: req.query._refID || '',
            _refURL: req.headers.referer || ''
         });
      }
} // renderUbicacion end...


