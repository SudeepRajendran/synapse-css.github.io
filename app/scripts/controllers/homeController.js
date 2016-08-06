angular.module('synapseCss').controller('homeController',['$scope','$state', function($scope,$state){
    var HC = this;
    HC.menuItems=[{name:'Tables', link: 'home.tables'},{name:'Modals', link: 'home.modals'},{name:'Forms', link: 'home.forms'}]
}]);