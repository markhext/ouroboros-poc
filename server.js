

const Hapi = require('hapi');
const Routes = require('./routes/index.route.js');


require('babel-core/register')({
    presets: ['react', 'es2015']
});



const server = new Hapi.Server();
server.connection({ port: 3000 });



const routes = new Routes( server );

routes.start;





server.start((err) => {if (err) {throw err;}
    console.log('Server is now running on', server.info.uri);
});

