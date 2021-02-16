angular.module('telephoneDirectory').controller('contactDetailsCtrl', function ($scope, $routeParams, contact) {
  $scope.contact = contact.data;
});