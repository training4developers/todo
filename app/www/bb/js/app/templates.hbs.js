define(['handlebars'], function(Handlebars) {

this["handlebars"] = this["handlebars"] || {};

this["handlebars"]["app-todo-layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header></header><main></main><footer></footer>";
},"useData":true});

this["handlebars"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<small>"
    + ((stack1 = ((helper = (helper = helpers.copyrightNotice || (depth0 != null ? depth0.copyrightNotice : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"copyrightNotice","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</small>";
},"useData":true});

this["handlebars"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<nav class=\"top-bar\" data-topbar role=\"navigation\"><ul class=\"title-area\"><li class=\"name\"><h1><a href=\"#\">"
    + this.escapeExpression(((helper = (helper = helpers.siteName || (depth0 != null ? depth0.siteName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"siteName","hash":{},"data":data}) : helper)))
    + "</a></h1></li></ul><section class=\"top-bar-section\"><ul class=\"right\"><li class=\"has-form\"><input type=\"text\" placeholder=\"Find ToDos\" aria-label=\"Find To Dos\"></li><li class=\"has-form\"><a href=\"#\" class=\"button expand\" id=\"new-todo-action\">New ToDo</a></li></ul></section></nav>";
},"useData":true});

this["handlebars"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div id=\"todo-list\"><div class=\"row\"><div class=\"small-12 medium-6 columns\">Task</div><div class=\"medium-2 columns show-for-medium-up\">Priority</div><div class=\"medium-2 columns show-for-medium-up\">Due Date</div><div class=\"medium-2 columns show-for-medium-up\">Completed</div></div><div class=\"row\" ng-repeat-start=\"todo in todos | filter:{task:findToDosByTask}\"><div class=\"small-10 medium-6 columns\"><a href=\"#\" todo-edit=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.id : stack1), depth0))
    + "\" todo-edit-complete=\"refreshToDos()\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.task : stack1), depth0))
    + "</a></div><div class=\"medium-2 columns show-for-medium-up\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.priority : stack1), depth0))
    + "</div><div class=\"medium-2 columns show-for-medium-up\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.dueDate : stack1), depth0))
    + "</div><div class=\"small-2 medium-2 columns\"><input type=\"checkbox\" ng-model=\"todo.completed\" ng-change=\"saveToDo(todo)\"></div></div><div class=\"row show-for-small-only\"><div class=\"small-6 columns\"><small>Priority: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.priority : stack1), depth0))
    + "</small></div><div class=\"small-6 columns\"><small>Due Date: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.dueDate : stack1), depth0))
    + "</small></div></div><div class=\"row\" ng-repeat-end><div class=\"small-12\"><hr></div></div></div>";
},"useData":true});

this["handlebars"]["todo-edit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "<h2 id=\"modalTitle\">Edit ToDo</h2>";
},"3":function(depth0,helpers,partials,data) {
    return "<h2 id=\"modalTitle\">New ToDo</h2>";
},"5":function(depth0,helpers,partials,data) {
    return " <button type=\"button\" delete-todo-action>Delete</button> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "<form><div class=\"row\"><div class=\"large-12 columns\"><textarea type=\"text\" name=\"task\" id=\"task\" placeholder=\"Work on my dreams...\" aria-label=\"To Do\" rows=\"4\" data-bind=\"value: task, valueUpdate: 'blur'\"></textarea></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Due Date <input type=\"text\" name=\"dueDate\" id=\"due-date\" data-bind=\"value: dueDate, valueUpdate: 'blur'\"></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Priority<select id=\"priority\" name=\"priority\" data-bind=\"value: priority\"><option value=\"10\">High</option><option value=\"0\">Normal</option><option value=\"-10\">Low</option></select></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Completed <input type=\"checkbox\" name=\"completed\" id=\"completed\" data-bind=\"checked: completed\"></label></div></div><div class=\"row\"><div class=\"large-12 columns buttons\"><button type=\"button\" save-todo-action>Save</button> <button type=\"button\" cancel-todo-action>Cancel</button> "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0._id : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div></div></form><a class=\"close-reveal-modal\" aria-label=\"Close\">&#215;</a>";
},"useData":true});

this["handlebars"]["todo-layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header></header><main></main><footer></footer><div modal></div>";
},"useData":true});

this["handlebars"]["todo-list-item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2=this.escapeExpression;

  return "<div class=\"row\"><div class=\"small-10 medium-6 columns\"><a href=\"#\" id=\"edit-todo-action\">"
    + alias2(((helper = (helper = helpers.task || (depth0 != null ? depth0.task : depth0)) != null ? helper : alias1),(typeof helper === "function" ? helper.call(depth0,{"name":"task","hash":{},"data":data}) : helper)))
    + "</a></div><div class=\"medium-2 columns show-for-medium-up\">"
    + alias2((helpers.priorityLabel || (depth0 && depth0.priorityLabel) || alias1).call(depth0,(depth0 != null ? depth0.priority : depth0),{"name":"priorityLabel","hash":{},"data":data}))
    + "</div><div class=\"medium-2 columns show-for-medium-up\">"
    + alias2((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.dueDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</div><div class=\"small-2 medium-2 columns\">"
    + alias2((helpers.checkbox || (depth0 && depth0.checkbox) || alias1).call(depth0,(depth0 != null ? depth0.completed : depth0),{"name":"checkbox","hash":{},"data":data}))
    + "</div></div><div class=\"row show-for-small-only\"><div class=\"small-6 columns\"><small>Priority: "
    + alias2((helpers.priorityLabel || (depth0 && depth0.priorityLabel) || alias1).call(depth0,(depth0 != null ? depth0.priority : depth0),{"name":"priorityLabel","hash":{},"data":data}))
    + "</small></div><div class=\"small-6 columns\"><small>Due Date: "
    + alias2((helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.dueDate : depth0),{"name":"formatDate","hash":{},"data":data}))
    + "</small></div></div><div class=\"row\"><div class=\"small-12\"><hr></div></div>";
},"useData":true});

this["handlebars"]["todo-list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"todo-list\"><div class=\"row\"><div class=\"small-12 medium-6 columns\">Task</div><div class=\"medium-2 columns show-for-medium-up\">Priority</div><div class=\"medium-2 columns show-for-medium-up\">Due Date</div><div class=\"medium-2 columns show-for-medium-up\">Completed</div></div><div id=\"todo-rows\"></div></div>";
},"useData":true});

this["handlebars"]["todo-no-list-items"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row\"><div class=\"small-12\">No ToDos</div></div>";
},"useData":true});

return this["handlebars"];

});