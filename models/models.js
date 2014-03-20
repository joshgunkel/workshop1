//NOTE: Always place children schemas above the parent
//this seems to be necessary if you want embedded children to contain their own _id property


//account model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//http://psitsmike.com/2012/02/node-js-and-mongo-using-mongoose-tutorial/

var emailSchema = Schema({
    address: { type: String, trim: true, unique: true },
    primary: { type: Boolean },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
}, {
    _id: true
});


var accountSchema = Schema({
    first_name: { type: String, required: true, trim: true },
    last_name: { type: String, required: true, trim: true },
    user_name: { type: String, index: true, trim: true, unique: true },     //INDEXED + UNIQUE
    password: { type: String, required: true, trim: true },
    emails: [emailSchema],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});


exports.Account = mongoose.model('Account', accountSchema);




