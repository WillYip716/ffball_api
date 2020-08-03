const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema(
    {
        name:{type:String, required: true},
        password:{type:String, required:true},
        roster: [{ type: Schema.Types.ObjectId, ref: "Player" }]
    }
);

module.exports = mongoose.model('User', UserSchema);