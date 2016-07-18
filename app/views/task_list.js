angular.module('myApp.tasks', ['ngRoute']).

config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/tasks', {
        templateUrl: 'views/task_list.html',
        controller: 'TasksCtrl'
    });
}]).

controller('TasksCtrl', ['$scope', 'Task', 'TaskAttributeValue', 'TaskStatus',
    function($scope, Task, TaskAttributeValue, TaskStatus) {
        $scope.oneAtATime = true;

        var task_statuses = TaskStatus.all();
        $scope.task_statuses = task_statuses;

        var tasks = Task.all();

        $scope.tasks = tasks;
        console.log(tasks);
    }
]);
