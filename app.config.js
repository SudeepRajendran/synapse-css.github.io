angular.module('synapseCss').config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl: 'app/partials/home.html'
    });
});