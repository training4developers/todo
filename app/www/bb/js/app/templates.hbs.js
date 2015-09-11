define(['handlebars'], function(Handlebars) {

this["handlebars"] = this["handlebars"] || {};

this["handlebars"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper;

  return "<small>"
    + ((stack1 = ((helper = (helper = helpers.copyrightNotice || (depth0 != null ? depth0.copyrightNotice : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"copyrightNotice","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "copyrightNotice</small>";
},"useData":true});

this["handlebars"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<nav class=\"top-bar\" data-topbar role=\"navigation\"><ul class=\"title-area\"><li class=\"name\"><h1><a href=\"#\">"
    + this.escapeExpression(((helper = (helper = helpers.siteName || (depth0 != null ? depth0.siteName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"siteName","hash":{},"data":data}) : helper)))
    + "</a></h1></li></ul><section class=\"top-bar-section\"><ul class=\"right\"><li class=\"has-form\"><input type=\"text\" placeholder=\"Find ToDos\" aria-label=\"Find To Dos\" ng-model=\"findToDosByTask\" trigger-event=\"find-todos-by-task\"></li><li class=\"has-form\"><a href=\"#\" class=\"button expand\" todo-edit todo-edit-complete=\"refreshToDos()\">New ToDo</a></li></ul></section></nav>";
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

  return this.escapeExpression(((helper = (helper = helpers.test || (depth0 != null ? depth0.test : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"test","hash":{},"data":data}) : helper)));
},"useData":true});

this["handlebars"]["todo-list-item"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});

this["handlebars"]["todo-list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return this.escapeExpression(((helper = (helper = helpers.test || (depth0 != null ? depth0.test : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"test","hash":{},"data":data}) : helper)));
},"useData":true});

return this["handlebars"];

});