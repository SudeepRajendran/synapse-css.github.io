angular.module('synapseCss').controller('modalsController', ['$scope', '$state', '$uibModal', function ($scope, $state, $uibModal) {
    var MC = this;
    MC.menuItems = [{
        name: 'Activity'
        , link: 'modals.activity'
    }, {
        name: 'Confirmation/Error'
        , link: 'modals.confirmation'
    }, {
        name: 'Office Hours'
        , link: 'modals.officeHours'
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
    
    MC.openConfirmation = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'confirmationModal.html'
            , size: 'md'
            ,controller: 'ModalInstanceCtrl'
        });
    };
    
    MC.openErrorModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'errorModal.html'
            , size: 'md'
            ,controller: 'ModalInstanceAutoCloseCtrl'
            ,windowTopClass: 'message-modal'
        });
    };
    
    MC.openSuccessModal = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'successModal.html'
            , size: 'md'
            ,controller: 'ModalInstanceAutoCloseCtrl'
            ,windowTopClass: 'message-modal'
        });
    };
    
    MC.openOfficeHours = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'officeHoursModal.html'
            , size: 'lg'
            ,controller: 'ModalInstanceCtrl'
        });
    };
    
    MC.openPermission = function () {
        var modalInstance = $uibModal.open({
            templateUrl: 'permissionModal.html'
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

angular.module('synapseCss').controller('ModalInstanceAutoCloseCtrl', function ($scope, $uibModalInstance, $timeout) {
    $timeout(function() {
                $uibModalInstance.dismiss('cancel');
            }, 1500)

});