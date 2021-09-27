/*
    Team 24, Music Maker DSL API
*/

const fastify = require('fastify');
const routes = require('./routes');

const build = (opts={}) => {

    const app = fastify(opts);
        
    // Routes

    routes.forEach((route) => {
        app.route(route);
    });

    return app;
}

module.exports = build;