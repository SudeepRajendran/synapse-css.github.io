angular.module('synapseCss').controller('modalsController',['$scope','$state', function($scope,$state){
    var MC = this;
    MC.menuItems=[{name:'Activity', link: 'modals.activity'},{name:'Confirmation/Error', link: 'modals.confirmation'},{name:'Permissions', link: 'modals.permissions'},{name:'Person forms adding/editing', link: 'modals.persons'},{name:'Report Filters', link: 'modals.reportFilters'},{name:'Search', link: 'modals.search'}];
}]);