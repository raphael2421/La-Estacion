// tiny png
const tinify = require("tinify");
tinify.key = process.env.TINY_PNG;
// modelo
const Post = require('../models/Post');
// importa el
// const fs = require('fs-extra');

const optimizaImagen = (path, source, file, empresa_id, res, next)=>{
    //resizing
    let resized = source.resize({
        method: "fit",
        width: 200,
        height: 150,
    });

    resized.toBuffer(async function (err, resultData) {
        console.log('imagen optimizada');
        if (err) throw err;
        // saving the new image
        let b64 = Buffer.from(resultData).toString("base64");
        await Empresa.findByIdAndUpdate(empresa_id, { "logo.mimetype": file.mimetype, "logo.b64": b64 });

        // fs.writeFile(`${path}/${file.name}`, resultData, "binary", async (err) => {
        //    console.log('convirtiendo imagen');
        //    if (err) throw err;
        //    let b64 = Buffer.from(resultData).toString("base64");
        //    await Empresa.findByIdAndUpdate(empresa_id, { "logo.mimetype": file.mimetype, "logo.b64": b64 });
        //    console.log('imagen guardada en disco y convertida a base64 en BDD');

        // });
        res.status(200).json({
            success: true,
            logo: { mimetype: file.mimetype, b64 }
        })
        next();
    });
} // Ends
module.exports = optimizaImagen;