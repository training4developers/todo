require.config({

	paths: {
		modernizr: "../../libs/foundation/js/vendor/modernizr",
		jquery: "../../libs/jquery/dist/jquery",
		foundation: "../../libs/foundation/js/foundation",
		underscore: '../../libs/underscore/underscore',
		backbone: '../../libs/backbone/backbone',
		marionette: '../../libs/backbone.marionette/lib/backbone.marionette',
		handlebars:'../../libs/handlebars/handlebars',
		bluebird:'../../libs/bluebird/js/browser/bluebird',
		knockout:'../../libs/knockout/dist/knockout',
		knockback:'../../libs/knockback/knockback',
	},

	shim: {
		modernizr: {
			exports: "modernizr"
		},
		jquery: {
			exports: '$'
		},
		foundation: {
			deps: ["modernizr","jquery"]
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
		},
		bluebird: {
			export: "Promise"
		},
		knockout: {
			exports: "ko"
		},
		knockback: {
			deps: ["knockout"],
			exports: "kb"
		}
	}

});

requirejs(["foundation", "app/app"]);
