angular.module('taskApp')
    .controller('TaskAddController', ['$scope', '$location', 'TasksService', function($scope, $location, TasksService) {
        $scope.task = {
            title: '',
            status: 'Pending', // Default status
            description: '',
            dueDate: new Date() // Default to current date
        };

        $scope.addTask = function() {
            // Ensure dueDate is in ISO format
            $scope.task.dueDate = $scope.task.dueDate.toISOString();
            
            TasksService.addTask($scope.task).then(function(response) {
                $location.path('/#');
            }).catch(function(error) {
                console.error('Error adding task:', error);
                // Handle error (e.g., show message to user)
            });
        };
    }]);