/**
 * Created by Seamy on 8/1/2016.
 */

 var app = angular.module('kachicode');


app.controller('indexCtrl', function indexCtrl($scope, $state){


        $scope.greeting ="hey seam";

     $scope.goTo = function() {
$state.go('about');

     }

    });


app.directive('landingPage', function indexDirective() {

   return {


       restrict: 'EA',
       scope: true,
       replace: true,
       templateUrl: 'landingPage/landingPage.html',
       controller: 'indexCtrl',
       controllerAs: 'ctrl'





   }



});