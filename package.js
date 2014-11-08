Package.describe({
    summary: "API.AI for meteor",
    version: "1.0.0",
    name: "particle4dev:voiceai",
    git: ""
});

// meteor test-packages ./
var both = ['client', 'server'];
var client = ['client'];
var server = ['server'];

Package.on_use(function(api) {
    api.versionsFrom("METEOR@0.9.3");
    api.use(['underscore', 'http'],  both);

    api.add_files([
        'src/common.js'
    ], both);

    api.add_files([
        'src/server.js'
    ], server);

    api.add_files([
        'src/client.js'
    ], client);

    if (typeof api.export !== 'undefined') {
        api.export('Voice', both);
    }
});
