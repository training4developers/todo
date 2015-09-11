(function(define) {

	"use strict";

	var deps = ["backbone", "common/bb-sync-promise"];

	function module(Backbone, bbSyncPromise) {

		return Backbone.Model.extend({
			fetch: bbSyncPromise(Backbone.Model.prototype.fetch),
			save: bbSyncPromise(Backbone.Model.prototype.save),
			destroy: bbSyncPromise(Backbone.Model.prototype.destroy)
		});

	}

	define(deps, module);

})(define);
