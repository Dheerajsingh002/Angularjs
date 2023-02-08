var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.num = 0;
    $scope.myfun = function(){
        $scope.num++;
    };

});