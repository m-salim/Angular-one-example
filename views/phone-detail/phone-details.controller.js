(function(){
    'use strict';
    
    function phoneDetailsController($scope, $log, $routeParams, $window, phoneService){
        var id = $routeParams.id;
       
        if(phoneService.getPhone(id)){
            $scope.phone = phoneService.getPhone(id);
        } else {
            //redirect to front page
             $window.location.href = '/index.html';
        }

    };
    phoneDetailsController.$inject = ['$scope', '$log', '$routeParams', '$window',  'phoneService'];
    
    
    function route($routeProvider){
        $routeProvider.when('/phone/:id', {
            templateUrl: 'views/phone-detail/phone-details.html',
            controller: 'phoneDetailsController'                    
        });
    };
    route.$inject = ['$routeProvider'];
    
    angular.module('phoneApp.phoneDetailsController', ['ngRoute'])
        .config(route)
        .controller('phoneDetailsController', phoneDetailsController);
    
}());
