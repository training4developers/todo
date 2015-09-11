(function(define) {

	"use strict";

	var deps = ["bluebird"];

	function module(Promise) {

		return function (syncFn) {

			return function (options) {

				if (!options) options = {};

				var originalSuccess = options.success;
				var originalError = options.error;

				var that = this;

				var p = new Promise(function(resolve, reject) {

					_.extend(options, {
						success: function(collection) {
							resolve(collection);
						},
						error: function(collection, xhr) {
							reject(xhr);
						}
					});

					syncFn.call(that, options);
				});

				return p.then(function() {
					if (_.isFunction(originalSuccess)) {
						originalSuccess.apply(this, $.makeArray(arguments));
					}
					return arguments[0];
				}).catch(function(xhr) {
					if (_.isFunction(originalError)) {
						originalError.apply(this, $.makeArray(arguments));
					}
					return Promise.reject(xhr);
				});

			};
		};

	}

	define(deps, module);

})(define);
