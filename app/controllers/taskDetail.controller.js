angular.module('taskApp')
    .controller('TaskDetailController', ['$scope', '$routeParams', 'TasksService', function($scope, $routeParams, TasksService) {
        $scope.task = {};

        TasksService.getTask($routeParams.id).then(function(response) {
            $scope.task = response.data;
        });
    }]);