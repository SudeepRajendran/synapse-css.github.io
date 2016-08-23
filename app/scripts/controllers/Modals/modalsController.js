angular.module('synapseCss').controller('modalsController', ['$scope', '$state', '$uibModal', function ($scope, $state, $uibModal) {
    var MC = this;
    MC.menuItems = [{
        name: 'Generic Modal Styles'
        , link: 'modals.generic'
    }, {
        name: 'Activity'
        , link: 'modals.activity'
    }, {
        name: 'Confirmation/Error'
        , link: 'modals.confirmation'
    }, {
        name: 'Permissions'
        , link: 'modals.permissions'
    }, {
        name: 'Person forms adding/editing'
        , link: 'modals.persons'
    }, {
        name: 'Report Filters'
        , link: 'modals.reportFilters'
    }, {
        name: 'Search'
        , link: 'modals.search'
    }];
    
    MC.slectOptions= ['Option1','Option2', 'Option3'];
    
    MC.openActivity = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'activityModal.html'
            , size: 'lg'
            ,controller: 'ModalInstanceCtrl'
        });
    };
}]);

angular.module('synapseCss').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance) {
  $scope.slectOptions= ['Option1','Option2', 'Option3'];
  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});