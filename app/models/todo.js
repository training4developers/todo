var
	mongoose = require("mongoose"),

	todoSchema = mongoose.Schema({
		task: String,
		priority: Number,
		dueDate: Date,
		completed: Boolean
	}),

	ToDoModel = mongoose.model("todo", todoSchema);

module.exports = ToDoModel;
