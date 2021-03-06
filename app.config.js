angular.module('synapseCss').config(function($stateProvider, $urlRouterProvider,uibDatepickerConfig){
    uibDatepickerConfig.showWeeks = false;
    $urlRouterProvider.otherwise("tables/searchresults");
    $stateProvider
    .state('overview',{
        url:'/overview',
        templateUrl: 'app/partials/overview/overview.html'
//        controller: 'homeController',
//        controllerAs: 'HC'
    }).state('dashboards',{
        abstract: true,
        url:'/dashboards',
        templateUrl: 'app/partials/Dashboards/dashboards.html',
        controller: 'dashboardsController',
        controllerAs: 'DC'
    }).state('dashboards.coordinator',{
        url:'/coordinator',
        templateUrl: 'app/partials/Dashboards/dashboards.coordinator.html'
    }).state('dashboards.risk',{
        url:'/risk',
        templateUrl: 'app/partials/Dashboards/dashboards.risk.html'
    }).state('dashboards.faculty',{
        url:'/faculty',
        templateUrl: 'app/partials/Dashboards/dashboards.faculty.html'
    }).state('dashboards.StudentProfile',{
        url:'/StudentProfile',
        templateUrl: 'app/partials/Dashboards/dashboards.StudentProfile.html'
    }).state('tables',{
        abstract: true,
        url:'/tables',
        templateUrl: 'app/partials/Tables/tables.html',
        controller: 'tableController',
        controllerAs: 'TC'
    }).state('tables.searchResults',{
        url:'/searchresults',
        templateUrl: 'app/partials/Tables/tables.searchResults.html'
    }).state('tables.withColomnSearch',{
        url:'/withColomnSearch',
        templateUrl: 'app/partials/Tables/tables.withColumnSearch.html'
    }).state('tables.normalTable',{
        url:'/normalTable',
        templateUrl: 'app/partials/Tables/tables.normalTable.html'
    }).state('modals',{
        abstract: true,
        url:'/modals',
        templateUrl: 'app/partials/Modals/modals.html',
        controller: 'modalsController',
        controllerAs: 'MC'
    }).state('modals.generic',{
        url:'/generic',
        templateUrl: 'app/partials/Modals/modals.generic.html'
    }).state('modals.activity',{
        url:'/activity',
        templateUrl: 'app/partials/Modals/modals.activity.html',
    }).state('modals.officeHours',{
        url:'/officeHours',
        templateUrl: 'app/partials/Modals/modals.officeHours.html'
    }).state('modals.confirmation',{
        url:'/confirmation',
        templateUrl: 'app/partials/Modals/modals.confirmation.html'
    }).state('modals.permissions',{
        url:'/permissions',
        templateUrl: 'app/partials/Modals/modals.permissions.html'
    }).state('modals.persons',{
        url:'/persons',
        templateUrl: 'app/partials/Modals/modals.persons.html'
    }).state('modals.reportFilters',{
        url:'/reportFilter',
        templateUrl: 'app/partials/Modals/modals.reportFilter.html'
    }).state('modals.search',{
        url:'/search',
        templateUrl: 'app/partials/Modals/modals.search.html'
    }).state('forms',{
        url:'/forms',
        templateUrl: 'app/partials/Forms/forms.html',
        controller: 'formsController',
        controllerAs: 'FC'
    }).state('studentprofile',{
        url:'/studentprofile',
        templateUrl: 'app/partials/Dashboards/dashboards.StudentProfile.html',
        controller: 'dashboardsController',
        controllerAs: 'DC'
    })
    ;
    
});