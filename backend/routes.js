const musicMakerController = require('./controllers/musicMakerController');

const routes = [

    {
        method: 'POST',
        url: '/v1/',
        handler: musicMakerController.helloWorld
    }
]

module.exports = routes;