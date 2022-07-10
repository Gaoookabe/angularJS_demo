let app = angular.module('ToDo', ['ngRoute', 'Controllers']);
app.config(function($routeProvider){
    $routeProvider.when("/", {
        controller : "MainCtrl",
        templateUrl : "../pages/main.html"
    });
});