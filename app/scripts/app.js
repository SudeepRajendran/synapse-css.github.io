var synapseCss = angular.module('synapseCss', ['ngRoute']);
synapseCss.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/navigation', {
        templateUrl: 'partials/navigation.html',
        controller: 'mainController',
    }).otherwise({
        templateUrl: 'partials/home.html',
        controller: 'mainController'
    });
}]);

synapseCss.controller('mainController', function ($scope, $route, $routeParams, $location) {
    console.log($location.path());
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.$routes = $route.routes;
    $scope.$route = $route;
    $scope.menuItems = {
        navigation: {
            url: '#/navigation',
            disabled: false,
            text: 'Navigation'
        },
        menus: {
            url: '#/menus',
            disabled: true,
            text: 'Menus'
        },
        tables: {
            url: '#/tables',
            disabled: true,
            text: 'Tables'
        },
        widgets: {
            url: '#/widgets',
            disabled: true,
            text: 'Widgets'
        },
        search: {
            url: '#/search',
            disabled: true,
            text: 'Search'
        },
        forms: {
            url: '#/forms',
            disabled: true,
            text: 'Forms'
        },
        modals: {
            url: '#/modals',
            disabled: true,
            text: 'Modals'
        },
    }
    availableSubMenuItems = {
        '/navigation': [{
            url: '#/navigation#main',
            disabled: false,
            text: 'Main Navigation'
        }, {
            url: '#/navigation#sub',
            disabled: false,
            text: 'Sub Navigation'
        }]
    }

    $scope.$on('$routeChangeSuccess', function(){
        $scope.submenuItems = availableSubMenuItems[$scope.$location.path()];
    });
});
