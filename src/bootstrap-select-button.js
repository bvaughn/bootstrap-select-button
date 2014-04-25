angular.module('bootstrapSelectButton', ['bootstrapSelectButton.templates']);
angular.module('bootstrapSelectButton').directive('bootstrapSelectButton',
    function() {
        return {
            templateUrl: 'bootstrap-select-button.html',
            restrict: 'AE',
            replace: true,
            scope: {
                options: '=',
                selectedOption: '=',
                optionIconKey: '@?',
                optionLabelKey: '@?',
                dropdownToggleClass: '@?'
            },
            controller: function($scope) {
                var optionLabelFilter = function(option) {
                    if ( !option ) {
                        return '';
                    } else if ( !!$scope.optionLabelKey ) {
                        return option[ $scope.optionLabelKey ];
                    } else if ( !!option.label ) {
                        return option.label;
                    } else {
                        return option;
                    }
                };

                var optionIconFilter = function(option) {
                    if ( !option ) {
                        return '';
                    } else if ( !!$scope.optionIconKey ) {
                        return option[ $scope.optionIconKey ];
                    } else if ( !!option.icon ) {
                        return option.icon;
                    }
                };

                var updateBindableSelectedOption = function() {
                    $scope.bindableSelectedOption = null;

                    if (!$scope.options || !$scope.selectedOption || !$scope.bindableOptions) {
                        return;
                    }

                    var index = $scope.options.indexOf($scope.selectedOption);

                    $scope.bindableSelectedOption = $scope.bindableOptions[index];
                };

                var updateBindableOptions = function() {
                    $scope.bindableOptions = [];

                    if (!$scope.options) {
                        return;
                    }

                    for ( var index = 0; index < $scope.options.length; index++ ) {
                        var option = $scope.options[index];

                        $scope.bindableOptions.push({
                            label: optionLabelFilter(option),
                            icon: optionIconFilter(option)
                        });
                    }

                    updateBindableSelectedOption();
                };

                $scope.$watch('selectedOption', updateBindableSelectedOption);
                $scope.$watch('options', updateBindableOptions);

                $scope.selectOption = function(bindableOption) {
                    var index = $scope.bindableOptions.indexOf( bindableOption );

                    $scope.selectedOption = $scope.options[index];
                };
            }
        };
    });
