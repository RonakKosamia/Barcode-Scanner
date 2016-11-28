To implement the barcode scanner in our Android and iOS application, start by creating a new Ionic Framework project.
This project contains more than just barcode scanner.  but here is the explanations what you need to do for barcode scanner.


ionic start IonicProject blank
cd IonicProject
ionic platform add android
ionic platform add ios

The next thing we want to do is add the barcode scanner plugin into our project.  This can be done by doing the following from a command line:

phonegap plugin add phonegap-plugin-barcodescanner

Now you can continue to build your application with just the plugin, but we are going to use the AngularJS ngCordova extension set to make our lives a little easier.
So Start by downloading the latest ngCordova release and copying the ng-cordova.min.js file into your project’s www/lib directory.

To add the extension set into our application we must first include the script before the cordova.js line in our index.html file.  It will look something like this:

Index.html file :

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
    <title></title>

    <link href="lib/ionic/css/ionic.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">

    <!-- IF using Sass (run gulp sass first), then uncomment below and remove the CSS includes above
    <link href="css/ionic.app.css" rel="stylesheet">
    -->

    <!-- ionic/angularjs js -->
    <script src="lib/ionic/js/ionic.bundle.js"></script>
    <script src="lib/ngCordova/dist/ng-cordova.js"></script>
    <!-- cordova script (this will be a 404 during development) -->
    <script src="cordova.js"></script>

    <!-- your app's js -->
    <script src="js/controllers.js"></script>
    <script src="js/app.js"></script>
  </head>
  <body ng-app="demo">

  </body>
</html>

With your index.html file set up, now we need to add the extension set to our app.js file.  Alter your angular.module line to look something like the following:

angular.module('demo', ['ionic', 'ngCordova'])


Create a controller and include the following method to initialize the barcode scanner.  For this example, I did the following:


.controller('NavController', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
var vm = this;

  vm.scan = function(){
    $ionicPlatform.ready(function() {

        $cordovaBarcodeScanner
        .scan()
        .then(function(result) {
            // Success! Barcode data is here
            vm.scanResults = "We got a barcoden" +
            "Result: " + result.text + "n" +
            "Format: " + result.format + "n" +
            "Cancelled: " + result.cancelled;
        }, function(error) {
            // An error occurred
            vm.scanResults = 'Error: ' + error;
        });
    });
};
})

You’ll notice that we had to include $cordovaBarcodeScanner in our controller.  The scanner returns an AngularJS promise, so if there is an error or success we’ll know about it.

Just like that, you’ve got a very simple barcode scanner in your Ionic Framework application.
