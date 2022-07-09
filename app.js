let app = angular.module("Hello", []);
app.controller("HelloCtrl", function($scope){
    $scope.hello = {
        text : "Hello"
    };
});