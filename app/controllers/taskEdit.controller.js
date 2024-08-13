angular.module('taskApp')
    .controller('TaskEditController', ['$scope', '$routeParams', '$location', 'TasksService', function($scope, $routeParams, $location, TasksService) {
        $scope.task = {};

        TasksService.getTask($routeParams.id).then(function(response) {
            $scope.task = response.data;
        });

        $scope.updateTask = function() {
            TasksService.updateTask($scope.task.id, $scope.task).then(function() {
                $location.path('/');
            });
        };
    }]);