(function(define) {

	"use strict";

	var deps = ["backbone", "common/bb-sync-promise"];

	function module(Backbone, bbSyncPromise) {

		return Backbone.Collection.extend({
			fetch: bbSyncPromise(Backbone.Collection.prototype.fetch),
			create: bbSyncPromise(Backbone.Collection.prototype.create)
		});

	}

	define(deps, module);

})(define);
