/*
 * Author: Bipin Bihari Pradhan
 * 
 * Directive Name: synapse-dropdown-list
 *
 * Directive for showing a drop down list in synapse style

 *
	<div style="display:inline-block" ng-show="showTimeoutList"
		ng-model="data.timeOut"
		synapse-dropdown-list
		name="'timeOut'"
		data-list="data.timeoutList"
		data-list-item-caption-attr="'caption'"
		data-list-item-value-attr="'value'"
		data-selected-item-value="data.system_inactivity_timeout"
		data-on-select="setTimeOut",
		data-rows="data.timeoutList.length"
		data-cols="10"
		></div>
 */

"use strict";

angular.module('synapseWebApp')

.directive( 'synapseDropdownList', 

function($timeout) {
        var instanceCount = 0;
	return {
		restrict: 'A', // Only to be used as an attribute
		
		require: '?ngModel', // ngModalController for setting dirty and pristine flags
		
		scope : {
			elementName: "=name",      // for naming the html input element
			selectedItem: '=ngModel',   // For storing / showing selected item
			list : '=', 		       // Name of the attribute holding the list of items for dropdown
			listItemCaptionAttr: '=',  // Name of the attribute holding the caption to be displayed
			listItemValueAttr: '=',    // Name of the attribute whose value is to be bound
			selectedItemValue: '=',    // for showing the selected item as selected in the dropdown
            selectedItemCaption: '=',    // for showing the selected item as selected in the dropdown
			rows: '=',
			cols: '=',
			onSelect : '=',
                        contextObject: '=',
			data : '=',
			defaultText : '=',
			listType : "=",
            disabled:'='
		},
		
		templateUrl : 'app/partials/directives/dropdown-list.html',

		link: function (scope, element, attrs, ngModel) {
                    scope.id='dropdownMenu-list' + instanceCount++;
                    if(attrs.role){
                        scope.role = attrs.role;
                        element.removeAttr('role');
                    }
                    else{
                        scope.role = 'listbox';
                    }
                    if (scope.role === "listbox") {
                        scope.itemRole = "option";
                    }
                    else if(scope.role === "menu"){
                        scope.itemRole = "menuitem";
                    }
                    if(attrs.tabindex)
                        scope.tabIndex = attrs.tabindex;
                    else
                    	scope.tabIndex = '0';
//QaitDevlabs Dropdown accessible
                    element.find('button').bind('click', function() {
                        var li = document.querySelector('#dropmenu' + scope.id + '>li>a.offset-item');
                        var elem = angular.element(li);
                        elem.attr('aria-live', 'polite');
                        elem.attr('tabindex', '-1');
                        elem.focus();
                    });

			
			if (!angular.isDefined( scope.rows)) {
				
				if (angular.isDefined( scope.list) && angular.isDefined( scope.list.length)) {
					
					scope.lines = Math.min( 4, scope.list.length );
				} else {
					scope.lines = 4;	
				}				
			} else {
				
				scope.lines = parseInt(scope.rows);
			}
			
			scope.customStyle = { height: (scope.lines*4) + 'em' };

			scope.customWidth = "";
			
			if (angular.isDefined( scope.cols)) {
				
				scope.cols = parseInt(scope.cols);

				var fontRatio = 0.5; // Fix for em not working as expect :(
				
				scope.customWidth = { width: ((scope.cols)*fontRatio) + 'em' };
			}

			
			scope.$watch( 'list', function (newValue) {
				
				renderSelectedItem();
			},true);
					
			scope.$watch( 'rows', function (newValue) {
				
				scope.lines = parseInt(scope.rows);

				scope.customStyle['height'] = (scope.lines*4) + 'em';

			});
				
			scope.$watch( 'selectedItemValue', function (newValue) {
				
				renderSelectedItem();
			});

			function renderSelectedItem () {
				
				if (angular.isDefined( scope.selectedItemValue)) {
					
					if ( angular.isDefined( scope.list) ) {
					
						for (var i=0; i < scope.list.length; i++) {
							
							if (scope.list[i][scope.listItemValueAttr] == scope.selectedItemValue) {
								
								scope.selectedItem = scope.list[i];
								
								break;
							}
						}
						
						if(scope.selectedItem){
							
						}
					}
				}
			}
			
			renderSelectedItem();
			
			function getItem (item) {
				
				return item;
			}
			
			function getItemCaption (item) {
				
				if ( angular.isDefined( item) ) {
					
					return item[scope.listItemCaptionAttr];
				}
				
				return item;
			}

			function getItemValue (item) {
				
				return item[scope.listItemValueAttr];
			}

			var caption = angular.isDefined( scope.listItemCaptionAttr)? getItemCaption: getItem;
			var value = angular.isDefined( scope.listItemCaptionAttr)? getItemValue: getItem;
							
			scope.getCaption = function (listItem) {

				if (listItem != undefined && listItem != null) {
					return caption(listItem);
				} else {
					return angular.isDefined(scope.defaultText) ? scope.defaultText : '';
				}
				
			};

			scope.getValue = function (listItem) {
				
				return value( listItem);
			};
			
			scope.isSubTitle = function (listItem) {
				
				return (value( listItem) === null);
			};
			
			scope.isButtonDisable = function(){
			
				if ( !angular.isDefined( scope.list) || !angular.isDefined( scope.list.length) ) {
				
					return true;
				}
				
				if (angular.isDefined(scope.disabled)) {
					
					return ((scope.list.length <= 0 || scope.disabled) ? true:false);
				}
				
				return (scope.list.length > 0 ? false:true);
			};
			
			scope.isSelected = function (listItem) {
				
				return !scope.isSubTitle( listItem) && (listItem === scope.selectedItem);
			};

			scope.setFocus=function(isLast,e)
			{
			    if(isLast)
			    {
			    	if (e.keyCode == 9)  {
			        	 var li = document.querySelector('#dropmenu' + scope.id + '>li>a.offset-item');
			             elem = angular.element(li);
			             elem.focus();
			             e.preventDefault();
			             return false;
			        }

			    }
			}

			scope.selectItem = function (listItem,e,key,id) {

				if ( scope.isSubTitle( listItem) ) {
					return;
				}

				if (e == 'e'){
                                    $timeout(function() {
                                        var e1 = document.getElementById("li"+id + key)

                                        e = angular.element(e1)
                                        e.trigger('click');
                                    }, 10);

                                    return;
                                }

				scope.selectedItem = listItem;

				if (angular.isDefined( scope.selectedItemValue)) {
					
					scope.selectedItemValue = value( listItem);
				}
                                
                                if (angular.isDefined( scope.selectedItemCaption)) {
                                    scope.selectedItemCaption = caption( listItem);
                                }
                                
				if (angular.isDefined( ngModel)) {
					
					ngModel.$setPristine( false);
					ngModel.$modalValue = value( listItem);
				}

				if (angular.isDefined( scope.onSelect)) {
					
					$timeout( function () {
                                                if ( angular.isDefined( scope.contextObject) ) {
                                                 
                                                    scope.onSelect.apply( scope.contextObject, [ listItem, scope.data ]);
                                                } else {
                                                    scope.onSelect( listItem, scope.data);
                                                }
					}, 50);
				}
				
				    element.attr('aria-live','polite');
                    element.attr('tabindex',-1);
                    var dropdownId = document.getElementById(id);
                    angular.element(dropdownId).focus();
                    
			};
		} // end of link function
	}; // end of return statement
});