(function(){
    
    function phoneService(){
        var phonesJSON = [
            {
                id: '1',
                brand: 'Apple',
                name: 'iPhone 6s Black',
                condition: 'New',
                price: '£700'
            },
            {
                id: '2',
                brand: 'Apple',
                name: 'iPhone 6s Gold',
                condition: 'Used',
                price: '£500'
            },
                        {
                id: '3',
                brand: 'Apple',
                name: 'iPhone 6 Red',
                condition: 'New',
                price: '£500'
            },
            {
                id: '4',
                brand: 'Apple',
                name: 'iPhone 4 Black',
                condition: 'Used',
                price: '£100'
            },
            {
                id: '5',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
                        {
                id: '6',
                brand: 'Apple',
                name: 'iPhone 5s Yellow',
                condition: 'New',
                price: '£300'
            },
            {
                id: '7',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
                        {
                id: '8',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
            {
                id: '9',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
            {
                id: '10',
                brand: 'Apple',
                name: 'iPhone Plus 6s',
                condition: 'New',
                price: '£700'
            },
                        {
                id: '11',
                brand: 'Apple',
                name: 'iPhone Plus 6s Gold',
                condition: 'Used',
                price: '£450'
            },
            {
                id: '12',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
                        {
                id: '13',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
            {
                id: '14',
                brand: 'Apple',
                name: 'iPhone Plus 6s Sliver',
                condition: 'Used',
                price: '£700'
            },
            {
                id: '15',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
                        {
                id: '16',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
            {
                id: '17',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
                        {
                id: '18',
                brand: 'Apple',
                name: 'iPhone 6 Pink',
                condition: 'Used',
                price: '£341.99'
            },
            {
                id: '19',
                brand: 'Apple',
                name: 'iPhone 6s Green',
                condition: 'New',
                price: '£730'
            },
            {
                id: '20',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
                        {
                id: '21',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£700'
            },
            {
                id: '22',
                brand: 'Apple',
                name: 'iPhone 6s Redish',
                condition: 'New',
                price: '£403.99'
            },
                        {
                id: '23',
                brand: 'Apple',
                name: 'iPhone 6s White',
                condition: 'New',
                price: '£740.99'
            },
            {
                id: '24',
                brand: 'Apple',
                name: 'iPhone 6s Rose',
                condition: 'New',
                price: '£722.99'
            },
            {
                id: '25',
                brand: 'Apple',
                name: 'iPhone 6s',
                condition: 'New',
                price: '£100.31'
            },
                        {
                id: '26',
                brand: 'Apple',
                name: 'iPhone 4s White',
                condition: 'New',
                price: '£200'
            },
            {
                id: '27',
                brand: 'Apple',
                name: 'iPhone 6s Black',
                condition: 'Used',
                price: '£340.50'
            },
                        {
                id: '28',
                brand: 'Apple',
                name: 'iPhone 6s Orange',
                condition: 'New',
                price: '£780'
            },
            {
                id: '29',
                brand: 'Apple',
                name: 'iPhone 6s Gold',
                condition: 'New',
                price: '£700'
            },
            {
                id: '30',
                brand: 'Apple',
                name: 'iPhone 6s Black',
                condition: 'New',
                price: '£700'
            },  
        ]
        var service = {};
        service.getPhones = function(from,to){
            
            return phonesJSON.slice(from, to);
        };
        
        service.getPhone = function(phoneId){
          var length = phonesJSON.length;
          for(var i = 0  ; i < length ; i++ ){
              
              if(phonesJSON[i].id === phoneId){
                  
                  return phonesJSON[i];
              };
          };
            
          
        };
        
        service.getTotalPhones = function(){
            return phonesJSON.length;
        };
        
        return service;
    };
    
angular.module('phoneApp').service ('phoneService', phoneService );
       
}());



