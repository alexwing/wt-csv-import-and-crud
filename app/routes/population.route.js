module.exports = function(app){
   const populationlist = require('../controllers/population.controllers');

    //Retrive all populationlist
    app.get('/api/population/all',populationlist.findAll)
    app.get('/api/population/:_id', populationlist.findOne);
    app.get('/api/population/delete/:_id', populationlist.delete);
    app.get('/api/population/add/:Edad/:Hombre/:Mujer/:Total', populationlist.save);
    app.get('/api/population/edit/:_id/:Edad/:Hombre/:Mujer/:Total', populationlist.edit);


}