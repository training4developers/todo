module.exports = function(fileName) {

	"use strict";

	var
		modelName = require("camelcase")(fileName),
		pluralize = require('mongoose/lib/utils').toCollectionName,
		collectionName = 	pluralize(modelName),
		DataModel = require("../models/" + fileName),
		router = require("express").Router();

	function handleResult() {
		var res = this;
		return function(err, results) {
			if (err) {
				global.logger.error(err);
				res.status(500).end();
				return;
			}
			res.json(results);
		}
	}

	router.route("/" + collectionName)
		.get(function(req, res) {
			DataModel.find({}, handleResult.call(res));
		});

	router.route("/" + collectionName)
		.post(function(req, res) {
			var t = new DataModel(req.body);
			t.save(handleResult.call(res));
		});

	router.route("/" + collectionName + "/:id")
		.get(function(req, res) {
			DataModel.findById(req.params.id, handleResult.call(res));
		})
		.put(function(req, res) {
			DataModel.findByIdAndUpdate(req.params.id, req.body, handleResult.call(res));
		})
		.delete(function(req, res) {
			DataModel.findByIdAndRemove(req.params.id, handleResult.call(res));
		});

 	return router;
}
