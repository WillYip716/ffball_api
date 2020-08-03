const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PlayerSchema = new Schema(
    {
        name:{type:String, required: true},
        position:{type:String, required:true, enum: ['QB', 'RB', 'WR','TE','K','DEF']},
        owner:{ type: Schema.Types.ObjectId, ref: "User" },
        rank:{type:Number, required:true},
        auctionprice:{type:Number, required:true},
        keeperyears: {type:Number, required:true, default:0}
    }
);

PlayerSchema
.virtual('keepable')
.get(function () {
  return (this.keeperyears < 3);
});

PlayerSchema
.virtual('freeagent')
.get(function () {
  return (this.owner === undefined);
});

module.exports = mongoose.model('Player', PlayerSchema);