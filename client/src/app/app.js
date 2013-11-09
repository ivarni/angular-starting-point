angular.module('app', [
    'ngRoute',
    'templates.app',
    'templates.common']);

angular.module('app').config(
    ['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);

angular.module('app').controller('AppCtrl', 
    ['$scope', function($scope) {
        $scope.message = 'Hello Angular!';
    }]);