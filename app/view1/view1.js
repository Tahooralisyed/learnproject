'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http',function($scope,$http) {

    $scope.submitForm = function (isValid) {
   /*console.log("Name",$scope.Name,'Mobile',$scope.mobile,'EmialId','address',$scope.address,$scope.mail,'Education',$scope.education);*/
   var studentDetails = {
       'Name':$scope.Name,
       'Mobile':$scope.mobile,
       'Address':$scope.address,
       'EmailId':$scope.mail,
       'Education':$scope.education
   }
   /*var datadetaisl= $scope.$http.post('')
        datadetaisl.then((result) =>{
       console.log('result',result);

        })*/
 },function(error){

    }

}]);