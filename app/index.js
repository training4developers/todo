module.exports = function(config) {

	"use strict";

	global.logger = require("./logger")(config.logger);

	var
		helpers = require("./helpers"),
		express = require("express"),
		app = express();

	require("mongoose").connect("mongodb://" +
		config.mongoServer.host + ":" +
		config.mongoServer.port + "/" +
		config.mongoServer.dbName);

	app.use("/api",
		require("body-parser").json(),
		require("./routers/rest")("todo"));

	Object.keys(config.httpServer.contentFolders).forEach(function(url) {
		app.use(url, express.static(config.httpServer.contentFolders[url]));
	});

	app.use("/ng", helpers.defaultFile(config.httpServer.ngIndexFile));
	app.use("/bb", helpers.defaultFile(config.httpServer.bbIndexFile));
	app.use("/", helpers.defaultFile(config.httpServer.indexFile));

	require("http").createServer(app)
		.listen(config.httpServer.port, function(err) {
			if (err) {
				global.logger.error(err);
				return;
			}
			global.logger.info("http server started on port " + config.httpServer.port);
		});

};
