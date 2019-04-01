var csv = require('fast-csv');
var mongoose = require('mongoose');
var Population = require('./app/model/population');
 
exports.post = function (req, res) {
    if (!req.files)
        return res.status(400).send('No files were uploaded.');
     
    var populationFile = req.files.file;
 
    var populations = [];
         
    csv
     .fromString(populationFile.data.toString(), {
         headers: true,
         ignoreEmpty: true,
         delimiter: ";"
     })
     .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
         populations.push(data);
     })
     .on("end", function(){
         Population.create(populations, function(err, documents) {
            if (err) throw err;
         });
          
         res.send(populations.length + ' populations have been successfully uploaded.');
     });
};