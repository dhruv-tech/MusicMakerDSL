import musicMakerController from './controllers/musicMakerController.js';

const routes = [

    {
        method: 'POST',
        url: '/v1/',
        handler: musicMakerController.helloWorld
    }
]

export default routes;