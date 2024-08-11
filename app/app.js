angular.module('taskApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/tasks.html',
                controller: 'TasksController'
            })
            .otherwise({redirectTo: '/'});
    }]);