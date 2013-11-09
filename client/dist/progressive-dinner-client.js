/*! progressive-dinner-client - v0.0.1
 * Copyright (c) 2013 Ivar Nilsen
 * Licensed MIT
 */
angular.module("app",["ngRoute","templates.app","templates.common"]),angular.module("app").config(["$routeProvider","$locationProvider",function(e,l){l.html5Mode(!0),e.otherwise({redirectTo:"/"})}]),angular.module("app").controller("AppCtrl",["$scope",function(e){e.message="Hello Angular!"}]),angular.module("templates.app",["main.tpl.html"]),angular.module("main.tpl.html",[]).run(["$templateCache",function(e){e.put("main.tpl.html","<div>\n    {{message}}\n</div>")}]),angular.module("templates.common",[]);