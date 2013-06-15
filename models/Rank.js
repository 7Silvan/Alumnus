module.exports = function(app, config, mongoose, nodemailer) {

    var RankSchema = new mongoose.Schema({
        number:  { type: Number, unique: true },
        label:  { type: String }
    });

    var Rank = mongoose.model('Rank', RankSchema);

    var addingCallback = function(err) {
        if (err) {
            return console.log(err);
        };
        return console.log('Rank was created');
    };

    var getRankList = function(){
        Rank.find(function(err,doc) {
            callback(doc);
        }).sort({number: 1})
    }

    return {
        number: number,
        label: label,
        Module: Rank
    }
}