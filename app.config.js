angular.module('synapseCss').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("home/tables");
    $stateProvider
    .state('home',{
        abstract: true,
        url:'/home',
        templateUrl: 'app/partials/Navigation/navigation.home.html',
        controller: 'homeController',
        controllerAs: 'HC'
    }).state('home.tables',{
        url:'/tables',
        templateUrl: 'app/partials/Navigation/navigation.tables.html',
        controller: 'homeController',
        controllerAs: 'HC'
    }).state('home.modals',{
        url:'/modals',
        templateUrl: 'app/partials/Navigation/navigation.modals.html',
        controller: 'homeController',
        controllerAs: 'HC'
    }).state('home.forms',{
        url:'/forms',
        templateUrl: 'app/partials/Navigation/navigation.forms.html',
        controller: 'homeController',
        controllerAs: 'HC'
    });
});