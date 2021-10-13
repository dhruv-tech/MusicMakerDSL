/*
    Team 24, Music Maker DSL Interpreter
*/

const contactController = {};

contactController.helloWorld = async(req, res) => {

    res.code(200);
    
    res.send({msg: 'Up and running!'});

}

module.exports = contactController;