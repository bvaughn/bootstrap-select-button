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
