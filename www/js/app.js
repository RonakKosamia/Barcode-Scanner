angular.module('demo', ['ionic', 'ngCordova'])

    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('root', {
                url : '/root',
                templateUrl : 'root.html',
                controller : 'RootPageController'
            })

            .state('fst', {
                url : '/fst',
                templateUrl : 'fst-abstract.html',
                abstract : true,
                controller : 'FstController'
            })
            .state('fst.home', {
                url: '/home',
                views: {
                    'fst': {
                        templateUrl: 'fst-home.html',
                        controller : 'FstHomePageController'
                    }
                }
            })

            .state('fst.scannerFail', {
                url: '/scanner.failure',
                views: {
                    'fst': {
                        templateUrl: 'scan-unable.html'
                    }
                }
            })


            .state('fst.scanner', {
                url: '/scanner',
                views: {
                    'fst': {
                        templateUrl: 'manual-check.html'
                    }
                }
            })
            .state('fst.first', {
                url: '/first',
                views: {
                    'fst': {
                        templateUrl: 'fst-first.html',
                        controller : 'FstFirstPageController'
                    }
                }
            })
            .state('fst.second', {
                url: '/second',
                views: {
                    'fst': {
                        templateUrl: 'fst-second.html',
                        controller : 'FstSecondPageController'
                    }
                }
            })

            .state('snd', {
                url : '/snd',
                templateUrl : 'snd-abstract.html',
                abstract : true,
                controller : 'SndController'
            })
            .state('snd.home', {
                url: '/home',
                views: {
                    'snd': {
                        templateUrl: 'snd-home.html',
                        controller : 'SndHomePageController'
                    }
                }
            })
            .state('snd.chat', {
                url: '/chat',
                views: {
                    'snd': {
                        templateUrl: 'snd-chat.html',
                        controller : 'SndChatPageController'
                    }
                }
            })
            .state('snd.chat-single', {
              url: '/chat-single',
              views: {
                'snd': {
                  templateUrl: 'snd-chat-single.html',
                  controller : 'SndChatSinglePageController'
                }
              }
            })
            .state('snd.drink', {
                url: '/drink',
                views: {
                    'snd': {
                        templateUrl: 'snd-drink.html',
                        controller : 'SndDrinkPageController'
                    }
                }
            })
            .state('snd.policy', {
                url: '/policy',
                views: {
                    'snd': {
                        templateUrl: 'snd-policy.html',
                        controller : 'SndPolicyPageController'
                    }
                }
            })

        $urlRouterProvider.otherwise('/root');
    }])

    .controller('RootPageController', function($scope, $ionicSideMenuDelegate) {
    })

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
                vm.scanResults = "We got a barcode" +
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
    .controller('FstController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('FstHomePageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('FstFirstPageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('FstSecondPageController', function($scope, $ionicSideMenuDelegate) {
    })
     .controller('SuccessScanController', function($scope, $rootScope, $cordovaBarcodeScanner, $ionicPlatform) {

    })
    .controller('SndController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('SndHomePageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('SndChatPageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('SndChatSinglePageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('SndDrinkPageController', function($scope, $ionicSideMenuDelegate) {
    })
    .controller('SndPolicyPageController', function($scope, $ionicSideMenuDelegate) {
    })
