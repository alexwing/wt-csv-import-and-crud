const Population = require('../model/population');
var mongoose = require('mongoose');

exports.findAll = (req, res) => {
    Population.find()
        .then(population => {
            if (population.length <= 0) {
                return res.status(404).send({
                    message: "Poblacion database Empty"
                })
            }
            res.send({
                Count: population.length,
                Population: population
            })
        })
        .catch(
            err => {
                res.status(500).send({
                    message: err.message
                });
            }
        )
}

exports.findOne = function (req, res) {
    Population.findOne({ _id: req.params._id }).then(population => {
        res.send({
            Population: population
        })
    })
        .catch(
            err => {
                res.status(500).send({
                    message: err.message
                });
            }
        )
}

exports.save = function (req, res) {
    var small = new Population();
        small._id = new mongoose.Types.ObjectId();
        small.Edad = req.params.Edad;    
        small.Hombre = req.params.Hombre;   
        small.Mujer = req.params.Mujer  
        small.Total = req.params.Total;    
        small.save(function (err,raw) {
        if (err) return res.send({message:0})
            res.send({
                _id:raw._id,
                message:1
            })
        });
}

exports.edit = function (req, res) {
    var small = new Population();
        small.Edad = req.params.Edad;    
        small.Hombre = req.params.Hombre;   
        small.Mujer = req.params.Mujer  
        small.Total = req.params.Total;    
        Population.findOneAndUpdate({_id: req.params._id }, { $set:small}, function (err,raw) {
        if (err) return res.send({message:0})
            res.send({
                    message:1
                })
        });
}


exports.delete = function (req, res) {
    Population.remove({ _id: req.params._id }).then(
        res.send({
            message:1
        })
    )
        .catch(
            err => {
                res.status(500).send({
                    message: 0
                });
            }
        )
}
