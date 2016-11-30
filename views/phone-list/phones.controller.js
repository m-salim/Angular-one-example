(function(){
    'use strict';
    
    function phoneController($scope, $log, phoneService){
        var pageNumber = 1;
        var itemsPerPage = 25, from, to;
        var totalPages = Math.ceil(phoneService.getTotalPhones() / itemsPerPage )
        
    
        $('#pagination').twbsPagination({
            totalPages: totalPages,
            visiblePages: 5,
            onPageClick: function (event, page) {
                pageNumber = page;

                from = (pageNumber * itemsPerPage) - itemsPerPage;
                to = pageNumber * itemsPerPage;
                $scope.from = from;
                $scope.to = to;
                $scope.totalPhones = phoneService.getTotalPhones();
                $scope.phones = phoneService.getPhones(from, to);
                //$log.info($scope.phones);

                if(!$scope.$$phase) {  
                    $scope.$apply();
                }
                
            }
        });
    };

    phoneController.$inject = ['$scope', '$log', 'phoneService'];

    function route($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'views/phone-list/phone-list.html',
            controller: 'phoneController'                    
        });
        
    };
    route.$inject = ['$routeProvider'];
    
    angular.module('phoneApp.phoneController', ['ngRoute'])
        .config(route)
        .controller('phoneController', phoneController);
    
}());

