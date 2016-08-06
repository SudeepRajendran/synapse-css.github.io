angular.module('synapseCss').directive('subMenu',['$window', function($window){
    return{
        restrict: 'AE',
        scope: {
            info: '='
        },
        templateUrl: 'app/partials/directives/submenuDirective.html'
//        link: function(attrs, scope, element ){
//            console.log(attrs.info);
//        }
    }
}])

