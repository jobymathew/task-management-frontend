angular.module('taskApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<task-list></task-list>'
            })
            .when('/add', {
                template: '<task-form></task-form>'
            })
            .when('/edit/:id', {
                template: '<task-form></task-form>'
            })
            .otherwise({redirectTo: '/'});
    }]);