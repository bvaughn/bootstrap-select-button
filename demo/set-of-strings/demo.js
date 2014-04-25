angular.module('demo', ['bootstrapSelectButton']);
angular.module('demo').controller('Demo',
  function($scope) {
    $scope.options = ['Apple', 'Orange', 'Banana'];
    $scope.selected = 'Apple';
  });
