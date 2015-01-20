/**
 * Created by gaidash on 13.01.15.
 */
var app = angular.module('myApp',['myApp.directives']);

app.controller('MainCtrl',function($scope){
   $scope.myText = 'Not Selected';
   $scope.currentDate = '';
   $scope.updateMyText = function(date){
       $scope.myText = 'Selected';
   };
});