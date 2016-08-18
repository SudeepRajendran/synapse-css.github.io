angular.module('synapseCss').controller('formsController',['$scope','$state', function($scope,$state){
    var FC = this;
    FC.toggleBtnValue = 'true';
    FC.toggleBtn = function(val,btn){
        if((btn == 'trueBtn' && val == 'false') || (btn == 'trueBtn' && val == '')){
            FC.toggleBtnValue = 'true';
        }else if((btn == 'falseBtn' && val == 'true') || (btn == 'falseBtn' && val == '')){
            FC.toggleBtnValue = 'false';
        }else if((btn == 'falseBtn' && val == 'false') || (btn == 'trueBtn' && val == 'true')){
            FC.toggleBtnValue = '';
        }
    };
    
    FC.td = new Date();
    FC.dateOptions= {
                showWeeks: 'false'
            };
}]);