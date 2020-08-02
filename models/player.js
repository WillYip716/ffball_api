const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PlayerSchema = new Schema(
    {
        name:{type:String, required: true, max:20},
        auctionprice:{type:Number, required:true},
        keeperyears: {type:Number, required:true}
    }
);

module.exports = mongoose.model('Player', PlayerSchema);