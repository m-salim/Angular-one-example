(function(){
    'use strict';
    
    function basketController($scope, $log, $routeParams, $window, phoneService){
        var id = $routeParams.id;
       
        if(phoneService.getPhone(id)){
            $scope.phone = phoneService.getPhone(id);
        } else {
            //redirect to front page
             $window.location.href = '/index.html';
        }
        
        
    };
    basketController.$inject = ['$scope', '$log', '$routeParams', '$window',  'phoneService'];
    
    
    function route($routeProvider){
        $routeProvider.when('/basket/:id', {
            templateUrl: 'views/basket/basket.html',
            controller: 'basketController'                    
        });
    };
    route.$inject = ['$routeProvider'];
    
    angular.module('phoneApp.basketController', ['ngRoute'])
        .config(route)
        .controller('basketController', basketController);
    
}());
