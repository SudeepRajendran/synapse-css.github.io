angular.module('synapseCss').controller('dashboardsController',['$scope','$state', function($scope,$state){
    var DC = this;
    DC.menuItems=[{name:'Coordinator', link: 'dashboards.coordinator'},{name:'Risk', link: 'dashboards.risk'},{name:'Faculty', link: 'dashboards.faculty'},{name:'StudentProfile',link: 'dashboards.StudentProfile'}];
}]);