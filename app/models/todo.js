"use strict";

var
	mongoose = require("mongoose"),

	todoSchema = mongoose.Schema({
		task: {
			type: String,
			required: true
		},
		priority: {
			type: Number,
			default: 0,
			index: true,
			required: true
		},
		dueDate: {
			type: Date,
			default: Date.now,
			index: true,
			required: true
		},
		completed: {
			type: Boolean,
			default: false,
			index: true,
			required: true
		}
	}),

	ToDoModel = mongoose.model("todo", todoSchema);

module.exports = ToDoModel;
