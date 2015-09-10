module.exports = {

	defaultFile: function(fileName) {

		return function(req, res) {
			res.sendFile(fileName, function(err) {
				if (err) {
					global.logger.error(err);
					res.status(err.status).end();
				}
			});
		};

	}

}
