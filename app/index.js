module.exports = function(config) {

	global.logger = require("./logger")(config.logger);

	var
		helpers = require("./helpers"),
		express = require("express"),
		app = express();

	require("mongoose").connect("mongodb://" +
		config.mongoServer.host + ":" +
		config.mongoServer.port + "/" +
		config.mongoServer.dbName);

	app.use("/api", require("body-parser").json());
	app.use("/api", require("./routers/rest")("todo"));

	Object.keys(config.httpServer.contentFolders).forEach(function(url) {
		var folder = config.httpServer.contentFolders[url];
		global.logger.info("configuring route " + url + " for folder " + folder);
		app.use(url, express.static(folder));
	});

	app.use("/ng", helpers.defaultFile(config.httpServer.ngIndexFile));
	app.use("/bb", helpers.defaultFile(config.httpServer.bbIndexFile));
	app.use("/", helpers.defaultFile(config.httpServer.indexFile));

	require("http").createServer(app).listen(config.httpServer.port, function(err) {
		if (err) {
			global.logger.error(err);
			return;
		}
		global.logger.info("http server started on port " + config.httpServer.port);
	});

}
