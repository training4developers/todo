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
		ngPartialsFolder = path.join(wwwFolder, "ng", "partials"),
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
				"/ng/partials": ngPartialsFolder
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
    handlebars: {
			compile: {
				options: {
					namespace: "handlebars",
					amd: true,
					processName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					},
					processPartialName: function(filePath) {
						return path.basename(filePath, ".min.hbs");
					}
				},
				files: {
					"app/www/bb/js/templates.hbs.js": ["assets/handlebars-min/**/*.min.hbs"]
				}
			}
		},
		htmlmin: {
			handlebars: {
	      options: {
	        removeComments: true,
	        collapseWhitespace: true
	      },
        expand: true,
        cwd: 'assets/handlebars',
        src: '*.hbs',
        dest: 'assets/handlebars-min/',
        ext: ".min.hbs"
	    }
		},
		watch: {
			handlebars: {
				files: ["assets/handlebars/**/*.hbs"],
				tasks: ["htmlmin:handlebars", "handlebars"],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-handlebars");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");

	grunt.registerTask("sample-data", "create sample data", function() {
		require("./app/sample-data")(grunt.config(), this.async());
	});

	grunt.registerTask("web-server", "start the web server", function() {
		require("./app/index")(grunt.config());
	})

	grunt.registerTask("default", ["htmlmin", "handlebars", "watch"]);

};
