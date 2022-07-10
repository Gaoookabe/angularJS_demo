let app = angular.module('ToDo', ['ngRoute', 'Controllers','Directives']);
app.config(function($routeProvider){
    $routeProvider.when("/", {
        controller : "MainCtrl",
        templateUrl : "../pages/main.html"
    });
});