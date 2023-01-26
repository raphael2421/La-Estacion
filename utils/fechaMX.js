const fechaMX = async () => {
   utc = new Date();
   toLocal = new Date(utc.setHours(utc.getHours() - 6));
   // console.log(toLocal.toISOString().slice(0, 19));
   // console.log(utc.toISOString().slice(0, 19));
   return toLocal.toISOString().slice(0, 10);
}

/// exports
module.exports = fechaMX;