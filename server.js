

const Hapi = require('hapi');
const Routes = require('./routes/index.route.js');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ouroboros');


require('babel-core/register')({
    presets: ['react', 'es2015']
});



const server = new Hapi.Server();
server.connection({ port: 3000 });

//var Cat = mongoose.model('Cat', { name: String });
//
//var kitty = new Cat({ name: 'Zildjian' });
//
//
//kitty.save(function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('meow');
//    }
//});


const routes = new Routes( server );

routes.start;





server.start((err) => {if (err) {throw err;}
    console.log('Server is now running on', server.info.uri);
});

