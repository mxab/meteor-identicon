Package.describe({
    summary: "TrainingsPlanet Asset Module, provides Image and Video Collections"
});
Package.on_use(function (api, where) {



    api.add_files("identicon.js", ['server', 'client']);
    api.add_files("pnglib.js", ['server', 'client']);

    api.export("Identicon", ['client', 'server']);

});