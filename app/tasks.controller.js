angular.module('taskApp')
    .controller('TasksController', ['$scope', 'TasksService', function($scope, TasksService) {
        $scope.tasks = [];
        $scope.newTask = {};

        $scope.getTasks = function() {
            TasksService.getTasks().then(function(response) {
                $scope.tasks = response.data;
            });
        };

        $scope.addTask = function() {
            TasksService.addTask($scope.newTask).then(function(response) {
                $scope.tasks.push(response.data);
                $scope.newTask = {};
            });
        };

        $scope.getTasks();
    }]);