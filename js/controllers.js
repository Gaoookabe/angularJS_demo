angular.module("Controllers", []).controller("MainCtrl", ["$scope", function($scope){
        $scope.title = "ToDo";
        $scope.todos = [
            {text : "Study to Anguler ", done : true},
            {text : "AngularJSでアプリを作る ", done : false},
            {text : "ng-classで取り消し線を付ける ", done : false},
        ];
        $scope.doneType = "line";
        $scope.text = "";
}]);