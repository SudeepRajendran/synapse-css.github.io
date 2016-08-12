angular.module('synapseCss').controller('tableController',['$scope','$state', function($scope,$state){
    var TC = this;
    TC.menuItems=[{name:'Search Results', link: 'tables.searchResults'},{name:'Table with column search', link: 'tables.withColomnSearch'},{name:'List Table', link: 'tables.normalTable'}];
}]);