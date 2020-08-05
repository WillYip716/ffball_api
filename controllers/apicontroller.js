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

    Player.insertMany(playerlist, (err, docs) => {
        if(err){
            return next(err);
        }
        res.status(200).json(docs);
        console.log("finished upload");
    });
    
};
