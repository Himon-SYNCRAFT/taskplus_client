angular.module('myApp.admin.users', ['ngRoute']).

config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/admin/users', {
        templateUrl: 'admin/views/users.html',
        controller: 'UsersCtrl'
    });
}]).

controller('UsersCtrl', ['$scope', '$filter', 'User', function($scope, $filter, User) {
    $scope.oneAtATime = true;

    var users = User.all();

    $scope.users = users;

    $scope.mode = [];


    $scope.edit = function(user, index) {
        $scope.mode[index] = "edit";
    };

    $scope.delete = function(user) {
        if (confirm("Napewno chcesz usunąć użytkownika " + user.login + " ?")) {
            var response = User.delete({
                id: user.id
            });

            response.$promise.then(function() {
                $scope.users = $filter('filter')($scope.users, function(value, index) {
                    return value.id !== user.id;
                });
            });
        }
    };

    $scope.add = function() {
        var user = User();

        $scope.users.push(user);
        $scope.mode[$scope.users.length - 1] = "edit";
    };

    $scope.save = function(user, index) {
        if (typeof user !== 'undefined' && typeof index !== 'undefined') {
            $scope.mode[index] = "";
            User.update({
                id: user.id
            }, user);
        }
    };
}]);
