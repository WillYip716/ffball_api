const User = require('../models/users');
const Player = require('../models/player');

exports.player_info = function(req,res,next){
    User.findById(req.params.id).populate('roster').exec(
        function(err,result){
            if(err){return next(err)};
            res.json(result);
        }
    );
};

exports.store_league = function(req,res,next){
    let playerlist = req.body.list;
    var player;
    playerlist.each((i,element)=>{
        player = new Player({
            name:element.name,
            position: element.position,
            owner:element.owner,
            rank:element.rank,
            auctionprice:element.auctionprice,
            keeperyears: element.keeperyears
        }).save(function(err, savedplayer) {
            if (err) {
                return next(err);
            }
            res.status(200);
        });
    });
};
