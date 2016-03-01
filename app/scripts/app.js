var synapseCss = angular.module('synapseCss',['ngRoute']);
synapseCss.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/navigation',{
        templateUrl: 'partials/navigation.html',
        controller: 'mainController'
    }).otherwise({
        templateUrl: 'partials/home.html',
        controller: 'mainController'
    });
}]);

synapseCss.controller('mainController', function($scope){
    $scope.menuItems={
        navigation:{
            url: '#/navigation',
            disabled: false,
            text: 'Navigation'
        },
        menus:{
            url: '#/menus',
            disabled: true,
            text: 'Menus'
        },
        tables:{
            url: '#/tables',
            disabled: true,
            text: 'Tables'
        },
        widgets:{
            url: '#/widgets',
            disabled: true,
            text: 'Widgets'
        },

    }
});