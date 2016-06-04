var app = angular.module( 'cennikApp', [] );

app.controller( 'tabCtr' , ['$scope' , '$filter', '$http' , function( $scope , $filter , $http){
    
    $http.get('./dane.json').success(function(data){
    $scope.uslugi = data;
        
});
        
}]);