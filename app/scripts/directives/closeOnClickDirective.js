angular.module('synapseCss').directive('closeOnClick',['$window', function($window){
    return{
        restrict: 'AE',
        
        link: function(attrs, scope, element ){
           $(document).on('click',function(){
                $('.collapse').removeClass('in');
            })
        }
    }
}])

