angular.module('templates.app', ['main.tpl.html']);

angular.module("main.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("main.tpl.html",
    "<div>\n" +
    "    {{message}}\n" +
    "</div>");
}]);
