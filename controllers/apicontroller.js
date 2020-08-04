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
    let playerlist = JSON.parse(JSON.stringify(req.body));
    for(var element in playerlist){
        player = new Player({
            name:playerlist[element].name,
            position: playerlist[element].position,
            //owner:playerlist[element].owner,
            rank:playerlist[element].rank,
            auctionprice:playerlist[element].auctionprice,
            keeperyears: playerlist[element].keeperyears
        }).save(function(err, savedplayer) {
            if (err) {
                return next(err);
            }
            res.status(200);
            return;
        });
    }
    
};
