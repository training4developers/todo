module.exports = function(grunt) {

	grunt.initConfig({
		webServer: {
			port: 8080,
			rootFolder: "app/www"
		},
		sqlite: {
			fileName: "todos.db"
		}
	});

	grunt.registerTask("default", function() {

		var
			express = require("express"),
			bodyParser = require("body-parser"),
			app = express(),
			webServerConfig = grunt.config("webServer");

		this.async();

		app.use("/api", bodyParser.json());

		app.use("/api", require("./app/restService")(grunt.config("sqlite")));

		app.use(express.static(webServerConfig.rootFolder));

		require("http").createServer(app).listen(webServerConfig.port, function() {
			console.log("web server started on port " + webServerConfig.port);
		});

	});


};
