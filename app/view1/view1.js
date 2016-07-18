'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', 'User', 'Task', 'TaskStatus', 'TaskType',
    function($scope, User, Task, TaskStatus, TaskType) {
        var user = User.get({
            id: 1
        }, function() {
            console.log(user);
        });

        var task = Task.get({
            id: 1
        }, function() {
            console.log(task);
        });

        var task_status = TaskStatus.get({
            id: 1
        }, function() {
            console.log(task_status);
        });

        var task_type = TaskType.get({
            id: 1
        }, function() {
            console.log(task_type);
        });
    }
]);
