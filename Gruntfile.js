module.exports = function(grunt) {

	"use strict";

	var
		path = require("path"),
		wwwFolder = path.join("app", "www"),
		cssFolder = path.join(wwwFolder, "css"),
		ngJSFolder = path.join(wwwFolder, "ng", "js"),
		bbJSFolder = path.join(wwwFolder, "bb", "js"),
		libsFolder = path.join(wwwFolder, "libs"),
		mediaFolder = path.join(wwwFolder, "media"),
		imagesFolder = path.join(wwwFolder, "images"),
		indexFile = path.join(__dirname, wwwFolder, "index.html"),
		ngIndexFile = path.join(__dirname, wwwFolder, "ng", "index.html"),
		bbIndexFile = path.join(__dirname, wwwFolder, "bb", "index.html");

	grunt.initConfig({
		httpServer: {
			port: 8080,
			rootFolder: wwwFolder,
			indexFile: indexFile,
			ngIndexFile: ngIndexFile,
			bbIndexFile: bbIndexFile,
			contentFolders: {
				"/css": cssFolder,
				"/ng/js": ngJSFolder,
				"/bb/js": bbJSFolder,
				"/libs": libsFolder,
				"/media": mediaFolder,
				"/images": imagesFolder,
			}
		},
    mongoServer: {
      host: "localhost",
      port: 27017,
      dbName: "ToDos"
    },
    logger: {
      transports: {
        console: {
          level: "debug",
          colorize: true,
          timeStamp: true
        },
        file: {
          level: "debug",
          fileName: path.join(__dirname, "logs", "app.log"),
          timeStamp : true
        }
      }
    },

	});

	grunt.registerTask("default", function() {

		require("./app/index")(grunt.config());
		this.async();

	});


};
