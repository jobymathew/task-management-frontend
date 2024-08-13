angular.module('taskApp', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/views/taskList.html',
                controller: 'TaskListController'
            })
            .when('/task/:id', {
                templateUrl: '/app/views/taskDetail.html',
                controller: 'TaskDetailController'
            })
            .when('/edit/:id', {
                templateUrl: '/app/views/taskEdit.html',
                controller: 'TaskEditController'
            })
            .when('/add', {
                templateUrl: '/app/views/taskAdd.html',
                controller: 'TaskAddController'
            })
            // .when('/', {
            //     template: '<task-list></task-list>'
            // })
            // .when('/add', {
            //     template: '<task-form></task-form>'
            // })
            // .when('/edit/:id', {
            //     template: '<task-form></task-form>'
            // })
            .otherwise({ redirectTo: '/' });

    }]);