angular.module('bootstrapSelectButton', ['bootstrapSelectButton.templates']);
angular.module('bootstrapSelectButton').directive('bootstrapSelectButton',
    function() {
        return {
            templateUrl: 'bootstrap-select-button.html',
            require: 'A',
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

                    _.each($scope.options,
                        function(option) {
                            $scope.bindableOptions.push({
                                label: optionLabelFilter(option),
                                icon: optionIconFilter(option)
                            });
                        });

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
angular.module('bootstrapSelectButton.templates', ['bootstrap-select-button.html']);

angular.module("bootstrap-select-button.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("bootstrap-select-button.html",
    "<div class=\"btn-group\">\n" +
    "  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" ng-class=\"dropdownToggleClass\" data-toggle=\"dropdown\">\n" +
    "    <span ng-class=\"bindableSelectedOption.icon\" ng-if=\"bindableSelectedOption.icon\"></span>\n" +
    "    <span ng-bind=\"bindableSelectedOption.label\"></span>\n" +
    "    <span class=\"caret\"></span>\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "    <li ng-repeat=\"option in bindableOptions\">\n" +
    "      <a ng-click=\"selectOption(option)\">\n" +
    "          <span ng-class=\"option.icon\" ng-if=\"option.icon\"></span>\n" +
    "          <span ng-bind=\"option.label\"></span>\n" +
    "          <span class=\"glyphicon glyphicon-ok icon-ok check-mark\" ng-if=\"option === bindableSelectedOption\"></span>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "");
}]);
