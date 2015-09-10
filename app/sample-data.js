module.exports = function(config, done) {

	"use strict";

	global.logger = require("./logger")(config.logger);

	global.logger.info("connect to the mongoose database " + config.mongoServer.dbName + " on " + config.mongoServer.host + ":" + config.mongoServer.port)
	require("mongoose").connect("mongodb://" +
		config.mongoServer.host + ":" +
		config.mongoServer.port + "/" +
		config.mongoServer.dbName);

	function createToDo(task, priority, dueDate, completed) {
		global.logger.info("creating todo " + task);
		var todo = new require("./models/todo")({
			task: task,
			priority: priority,
			dueDate: dueDate,
			completed: completed
		});

		return new Promise(function(resolve, reject) {
			todo.save(function(err, result) {
				if (err) {
					global.logger.info("todo " + task + " not saved");
					global.logger.error(err);
					reject(err);
					return;
				}
				global.logger.info("todo " + task + " saved with id " + result._id);
				resolve(result._id);
			});
		});
	}

	Promise.all([
		createToDo("To Do 1", 0, Date.now(), false),
		createToDo("To Do 2", 10, Date.now(), true),
		createToDo("To Do 3", -10, Date.now(), false)
	]).then(function() {
		global.logger.info("done successfully");
		done();
	}, function() {
		global.logger.info("done with failures");
		done();
	});

}
