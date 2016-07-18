'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.tasks',
    'myApp.admin.users',
    'ngResource',
    'myApp.version',
    'ui.bootstrap',
    'angularMoment'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({
        redirectTo: '/tasks'
    });
}]);
