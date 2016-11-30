
var phoneApp = angular.module('phoneApp', ['ngRoute', 
                                           'phoneApp.phoneController',
                                           'phoneApp.phoneDetailsController',
                                           'phoneApp.basketController',
                                           'phoneApp.paymentController'
                                          
                                          ])
.config(['$routeProvider', function($routeProvider){
    
    $routeProvider.otherwise({redirectTo: '/'})
}]);
