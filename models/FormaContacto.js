// imports
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    nombre: {
        type: String, required: true
    },
    login: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true, select: false
    },
    social_links: {
        facebook: String,
        linkedin: String,
        github: String,
        fiverr: String,
        twitter: String,
    },
    resetPass:{type:String, default:undefined},
    deleteAt: { type: Date, default: new Date(masMinutos(3))},
    _date:{
        type: Date, default: Date.now
    },

});
// indexes
UserSchema.index({
    email: 1,
}, {
    unique: true,
});

UserSchema.index({ deleteAt: 1 }, { expireAfterSeconds: 0 });


// x4otgRTAsXy93sxNoa85qjnmfbNP290e
const User = mongoose.model('User', UserSchema);
module.exports = User;


