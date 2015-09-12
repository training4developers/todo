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
    + "</a></h1></li></ul><section class=\"top-bar-section\"><ul class=\"right\"><li class=\"has-form\"><input type=\"text\" placeholder=\"Find ToDos\" aria-label=\"Find To Dos\"></li><li class=\"has-form\"><a href=\"#\" class=\"button expand\">New ToDo</a></li></ul></section></nav>";
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

this["handlebars"]["todo-edit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"todoDetails\" class=\"reveal-modal\" data-reveal aria-labelledby=\"modalTitle\" aria-hidden=\"true\" role=\"dialog\"><h2 id=\"modalTitle\">"
    + this.escapeExpression(((helper = (helper = helpers.modalHeader || (depth0 != null ? depth0.modalHeader : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"modalHeader","hash":{},"data":data}) : helper)))
    + "</h2><form><div class=\"row\"><div class=\"large-12 columns\"><textarea type=\"text\" name=\"task\" id=\"task\" placeholder=\"Work on my dreams...\" aria-label=\"To Do\" rows=\"4\" ng-model=\"todo.task\"></textarea></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Due Date <input type=\"date\" name=\"dueDate\" id=\"due-date\" placeholder=\"9/9/2015\" ng-model=\"todo.dueDate\"></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Priority<select id=\"priority\" name=\"priority\" ng-model=\"todo.priority\" ng-options=\"priorityItem.value as priorityItem.caption for priorityItem in priorityList | orderBy:'value'\"></select></label></div></div><div class=\"row\"><div class=\"large-12 columns\"><label>Completed <input type=\"checkbox\" name=\"completed\" id=\"completed\" ng-model=\"todo.completed\"></label></div></div><div class=\"row\"><div class=\"large-12 columns buttons\"><button type=\"button\" ng-click=\"saveToDo(todo)\">Save</button> <button type=\"button\" ng-click=\"cancelToDo(todo)\">Cancel</button> <button type=\"button\" ng-click=\"deleteToDo(todo)\" ng-if=\"todo.id\">Delete</button></div></div></form><a class=\"close-reveal-modal\" aria-label=\"Close\">&#215;</a></div>";
},"useData":true});

this["handlebars"]["todo-layout"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header></header><main></main><footer></footer>";
},"useData":true});

this["handlebars"]["todo-list-item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"row\"><div class=\"small-10 medium-6 columns\"><a href=\"#\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.task : stack1), depth0))
    + "</a></div><div class=\"medium-2 columns show-for-medium-up\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.priority : stack1), depth0))
    + "</div><div class=\"medium-2 columns show-for-medium-up\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.dueDate : stack1), depth0))
    + "</div><div class=\"small-2 medium-2 columns\"><input type=\"checkbox\"></div></div><div class=\"row show-for-small-only\"><div class=\"small-6 columns\"><small>Priority: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.priority : stack1), depth0))
    + "</small></div><div class=\"small-6 columns\"><small>Due Date: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.todo : depth0)) != null ? stack1.dueDate : stack1), depth0))
    + "</small></div></div><div class=\"row\"><div class=\"small-12\"><hr></div></div>";
},"useData":true});

this["handlebars"]["todo-list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"todo-list\"><div class=\"row\"><div class=\"small-12 medium-6 columns\">Task</div><div class=\"medium-2 columns show-for-medium-up\">Priority</div><div class=\"medium-2 columns show-for-medium-up\">Due Date</div><div class=\"medium-2 columns show-for-medium-up\">Completed</div></div></div>";
},"useData":true});

this["handlebars"]["todo-no-list-items"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"row\"><div class=\"small-12\">No ToDos</div></div>";
},"useData":true});

return this["handlebars"];

});