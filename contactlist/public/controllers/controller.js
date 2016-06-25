var myapp = angular.module('myApp', []);

myapp.controller('appCtrl', function($scope, $http){
   console.log("Controller: All systems ready.");
    
    var refresh = function(){
        $http.get('/contactlist').success(function(response){
            console.log("Controller: Data requested received.");
            $scope.contactList = response;
            $scope.contact = "";
        });
    };
    
    refresh();
    
    $scope.addContact = function(){
        console.log($scope.contact);
        $http.post('/contactlist', $scope.contact).success(function(response){
            console.log(response);
            refresh();
        }); 
    };
    
    $scope.remove = function(id){
        console.log(id);
        $http.delete('/contactlist/' + id).success(function(response){
            refresh();
        });
    };
    
    $scope.editContact = function(id){
        console.log("Controller: editing id: " + id);
        $http.get('/contactlist/' + id).success(function(response){
            $scope.contact = response;
        });
    };
    
    $scope.update = function(){
        console.log($scope.contact._id);
        $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
            refresh();
        });
    };
    
    $scope.deselect = function(){
        $scope.contact = "";  
    };
    
    
});











