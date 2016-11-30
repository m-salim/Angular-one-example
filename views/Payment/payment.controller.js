(function(){
    'use strict';
    
    function paymentController($scope, $log, $routeParams, $window, phoneService){
        var id = $routeParams.id;
       
        if(phoneService.getPhone(id)){
            $scope.phone = phoneService.getPhone(id);
        } else {
            //redirect to front page
             $window.location.href = '/index.html';
        }
        
        
    };
    paymentController.$inject = ['$scope', '$log', '$routeParams', '$window',  'phoneService'];
    
    
    function route($routeProvider){
        $routeProvider.when('/payment/:id', {
            templateUrl: 'views/payment/payment.html',
            controller: 'paymentController'
        });
    };
    route.$inject = ['$routeProvider'];
    
    angular.module('phoneApp.paymentController', ['ngRoute'])
        .config(route)
        .controller('paymentController', paymentController);
    
}());
