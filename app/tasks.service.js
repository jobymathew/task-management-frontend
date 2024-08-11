angular.module('taskApp')
    .service('TasksService', ['$http', function($http) {
        var apiUrl = 'http://localhost:3000/tasks';

        this.getTasks = function() {
            return $http.get(apiUrl);
        };

        this.addTask = function(task) {
            return $http.post(apiUrl, task);
        };
    }]);