module.exports = function(app, config, mongoose, nodemailer) {

    var ModuleSchema = new mongoose.Schema({
        number:  { type: Number, unique: true },
        label:  { type: String }
    });

    var Module = mongoose.model('Module', ModuleSchema);

    var addingCallback = function(err) {
        if (err) {
            return console.log(err);
        };
        return console.log('Module was created');
    };

    var getModuleList = function(){
        Module.find(function(err,doc) {
            callback(doc);
        }).sort({number: 1})
    }

    return {
        number: number,
        label: label,
        Module: Module
    }
}
