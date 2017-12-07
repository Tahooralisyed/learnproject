'use strict';

angular.module('myApp.login',['ngRoute'])

.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/login',{
        templateUrl:'login/login.html',
        controller:'LoginCtrl',
        caseInsensitiveMatch:true
    })
}])

.controller('LoginCtrl',['$scope','$location',function ($scope,$location) {

    $scope.submitForm = function (isValid) {
        console.log('pass',$scope.password);
        /*var username = $scope.user;
        var password = $scope.password*/
        if($scope.user==="1234567890" && $scope.password ==="tahoor"){
           $location.path("/view1")
        }else {
            alert('Wrong credentails');
        }

    }

}]);
