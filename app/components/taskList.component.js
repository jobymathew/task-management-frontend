angular.module('taskApp')
    .component('taskList', {
        template: `
            <div>
                <h2 class="text-2xl font-semibold mb-4">Tasks</h2>
                <a href="#!/add" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Add New Task</a>
                <ul class="space-y-2">
                    <li ng-repeat="task in $ctrl.tasks" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h3 class="font-bold">{{task.title}}</h3>
                        <p>Status: {{task.status}}</p>
                        <div class="mt-4">
                            <a ng-href="#!/edit/{{task.id}}" class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</a>
                            <button ng-click="$ctrl.deleteTask(task.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                        </div>
                    </li>
                </ul>
            </div>
        `,
        controller: ['TasksService', function(TasksService) {
            var ctrl = this;
            
            ctrl.$onInit = function() {
                ctrl.loadTasks();
            };

            ctrl.loadTasks = function() {
                TasksService.getTasks().then(function(response) {
                    ctrl.tasks = response.data;
                });
            };

            ctrl.deleteTask = function(id) {
                if (confirm('Are you sure you want to delete this task?')) {
                    TasksService.deleteTask(id).then(function() {
                        ctrl.loadTasks();
                    });
                }
            };
        }]
    });