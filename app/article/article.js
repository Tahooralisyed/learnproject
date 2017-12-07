'use strict';

angular.module('myApp.article', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/article', {
            templateUrl: 'article/article.html',
            controller: 'artCtrl'
        });
    }])

.controller('artCtrl',['$scope',function () {

}])
