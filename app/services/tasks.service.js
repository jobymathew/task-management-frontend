angular.module('taskApp')
    .service('TasksService', ['$http', function($http) {
        var apiUrl = 'http://localhost:3000/tasks';

        this.getTasks = function() {
            return $http.get(apiUrl);
        };

        this.getTask = function(id) {
            return $http.get(apiUrl + '/' + id);
        };

        this.addTask = function(task) {
            return $http.post(apiUrl, task);
        };

        this.updateTask = function(id, task) {
            return $http.put(apiUrl + '/' + id, task);
        };

        this.deleteTask = function(id) {
            return $http.delete(apiUrl + '/' + id);
        };
    }]);