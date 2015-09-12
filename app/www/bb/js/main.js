require.config({

	paths: {
		modernizr: "../../libs/foundation/js/vendor/modernizr",
		jquery: "../../libs/jquery/dist/jquery",
		foundation: "../../libs/foundation/js/foundation",
		underscore: '../../libs/underscore/underscore',
		backbone: '../../libs/backbone/backbone',
		marionette: '../../libs/backbone.marionette/lib/backbone.marionette',
		handlebars:'../../libs/handlebars/handlebars',
		bluebird:'../../libs/bluebird/js/browser/bluebird'
	},

	shim: {
		modernizr: {
			exports: "modernizr"
		},
		jquery: {
			exports: '$'
		},
		foundation: {
			deps: ["jquery"]
		},
		underscore: {
			exports: '_'
		},
	  backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		marionette: {
			deps: ["backbone"],
			exports: "Marionette"
		},
		handlebars: {
			exports: "Handlebars"
		}
	}

});

requirejs(['app/app']);
