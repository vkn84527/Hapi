const Hapi = require('hapi');
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            var x= { message: "Welcome,Server is working Fine.........  " }
            return x
        }
    });

    server.route({
        method: 'GET',
        path: '/your/{name}',
        handler: (request, h) => {
            var x= { Your_Name: request.params.name }
            return x
        }
    });
    server.route({
        method: 'POST',
        path: '/details',
        handler: (request, h) => {
            var x= { Your_Name: request.payload.name,
                Your_Mob: request.payload.mob,
                Your_Email: request.payload.email
            }
            return x
        }
    });

    await server.start();
    console.log('Server running on', server.info.uri);
    
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();