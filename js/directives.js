angular.module("Directives", []).directive("addTodo", function(){
    return{
        restrict: 'A',
        // attrobute属性でバインド
        scope: {todos: '=todos'},
        //directiveが複数の場合、priorityの高い順で実行される
        priority: 1000,
        //terminal: trueは小さいpriorityのdirectiveが実行されなくなる
        terminal: true,
        replace: true,
        link: function(scope, element){
            let button = angular.element(element.children()[1]);
            button.bind("click", function(){
                console.log(scope.text);
                scope.todos.push({text: scope.text, done: false});
                scope.text = "";
                scope.$apply();
            });
        },
        templateUrl: '../pages/button.html',
        // 以下の書き方だとscope.textがうまくバインドされない
        // template: "<div><input ng-model='text'><button>追加</button></div>",
    };
});