angular.module('taskApp')
    .component('taskForm', {
        template: `
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 class="text-2xl font-semibold mb-4">{{$ctrl.isEditing ? 'Edit Task' : 'Add New Task'}}</h2>
                <form ng-submit="$ctrl.submitTask()">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                            Title
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" ng-model="$ctrl.task.title" required>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
                            Status
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="status" type="text" ng-model="$ctrl.task.status" required>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            {{$ctrl.isEditing ? 'Update Task' : 'Add Task'}}
                        </button>
                        <a href="#!/" class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Cancel
                        </a>
                    </div>
                </form>
            </div>
        `,
        controller: ['$routeParams', 'TasksService', '$location', function($routeParams, TasksService, $location) {
            var ctrl = this;
            
            ctrl.$onInit = function() {
                ctrl.isEditing = !!$routeParams.id;
                if (ctrl.isEditing) {
                    TasksService.getTask($routeParams.id).then(function(response) {
                        ctrl.task = response.data;
                    });
                } else {
                    ctrl.task = {};
                }
            };

            ctrl.submitTask = function() {
                if (ctrl.isEditing) {
                    TasksService.updateTask(ctrl.task.id, ctrl.task).then(function() {
                        $location.path('/');
                    });
                } else {
                    TasksService.addTask(ctrl.task).then(function() {
                        $location.path('/');
                    });
                }
            };
        }]
    });