angular.module('demo', ['bootstrapSelectButton']);
angular.module('demo').controller('Demo',
  function($scope) {
    $scope.options = [
      { value: 1, label: 'Facebook', icon: 'fa fa-facebook' },
      { value: 2, label: 'Google+', icon: 'fa fa-google-plus' },
      { value: 3, label: 'Twitter', icon: 'fa fa-twitter' },
    ];
    $scope.selected = $scope.options[1];
  });
