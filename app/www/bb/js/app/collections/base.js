(function(define) {

	define(["underscore", "backbone"], function(_, Backbone) {

		return Backbone.Collection.extend({

			fetch: function(options) {

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
							reject(xhr.responseText);
						}
					});

					Backbone.Collection.prototype
						.fetch.call(that, options);
				});

				return p.then(function() {
					if (_.isFunction(originalSuccess)) {
						originalSuccess.apply(this, $.makeArray(arguments));
					}
					return arguments[0];
				}).catch(function() {
					if (_.isFunction(originalError)) {
						originalError.apply(this, $.makeArray(arguments));
					}
					return xhr.responseText;
				});


			},

			create: function() {
				
			}

		});


	});

})(define);
