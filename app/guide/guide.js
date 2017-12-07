'use strict';

angular.module('myApp.guide',['ngRoute'])

    .config(['$routeProvider',function ($routeProvider) {
        $routeProvider.when('/guide',{
            templateUrl:'guide/guide.html',
            controller:'GuideCtrl',
            caseInsensitiveMatch:true
        })
    }])

.controller('GuideCtrl',['$scope',function () {

}])