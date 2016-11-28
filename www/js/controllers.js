angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicSideMenuDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('la-disagree-modal.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // Open the login modal
  $scope.disagree = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.closeApp = function() {
    ionic.Platform.exitApp();
  };
  
  $scope.toggleLeft = function(){
      $ionicSideMenuDelegate.toggleLeft(); 
  } ;
});
