angular.module('taskApp')
    .controller('TaskListController', ['$scope', '$location', 'TasksService', function($scope, $location, TasksService) {
        $scope.tasks = [];

        function loadTasks() {
            TasksService.getTasks().then(function(response) {
                $scope.tasks = response.data;
            });
        }

        $scope.deleteTask = function(id) {
            if (confirm('Are you sure you want to delete this task?')) {
                TasksService.deleteTask(id).then(function() {
                    loadTasks();
                });
            }
        };

        $scope.editTask = function(id) {
            $location.path('/edit/' + id);
        };

        loadTasks();
    }]);