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

    $scope.mode = [];

    $scope.users = users;
    $scope.columns = [
        'Imię',
        'Nazwisko',
        'Login',
        'Admin',
        'Zleceniobiorca',
        'Zleceniodawca',
        'Edytuj',
        'Usuń',
    ];
    $scope.attributes = [
        {name: 'first_name', type: 'string'},
        {name: 'last_name', type: 'string'},
        {name: 'login', type: 'string'},
        {name: 'is_admin', type: 'bool'},
        {name: 'is_contractor', type: 'bool'},
        {name: 'is_creator', type: 'bool'},
    ];


    $scope.edit = function(user, index) {
        $scope.mode[index] = "edit";
    };

    $scope.delete = function(user, index) {
        if (typeof user === 'undefined' || !user.hasOwnProperty('id')) {
            $scope.mode[index] = "";
            $scope.users.pop();
            return;
        }

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
        $scope.users.push({});
        $scope.mode[$scope.users.length - 1] = "edit";
    };

    $scope.save = function(user, index) {
        if (typeof user !== 'undefined' && typeof index !== 'undefined') {

            if(user.hasOwnProperty('id')) {
                var response = User.update({
                    id: user.id
                }, user);
            } else {
                var response = User.save(user);
            }

            response.$promise.then(function(){
                $scope.mode[index] = "";
            });
        }
    };
}]);
