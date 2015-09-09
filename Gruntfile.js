module.exports = function(grunt) {

	grunt.initConfig({
		webServer: {
			port: 8080,
			rootFolder: "app/www"
		}
	});

	grunt.registerTask("default", function() {

		var
			express = require("express"),
			app = express(),
			webServerConfig = grunt.config("webServer");

		this.async();

		app.use(express.static(webServerConfig.rootFolder));

		require("http").createServer(app).listen(webServerConfig.port, function() {
			console.log("web server started on port " + webServerConfig.port);
		});

	});


};
