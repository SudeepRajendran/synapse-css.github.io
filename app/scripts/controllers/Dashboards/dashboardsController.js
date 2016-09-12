angular.module('synapseCss').controller('dashboardsController',['$scope','$state', function($scope,$state){
    var DC = this;
    DC.menuItems=[{name:'Coordinator', link: 'dashboards.coordinator'},{name:'Risk', link: 'dashboards.risk'},{name:'Faculty', link: 'dashboards.faculty'}];
    DC.selectOptions= ['Show All (2)','Note (1)', 'Contacts (3)','Appointments (2)'];
    
       $scope.selectedView = 1;
    $scope.selected = function(i) {
      $scope.selectedView = i;
    };
}]);