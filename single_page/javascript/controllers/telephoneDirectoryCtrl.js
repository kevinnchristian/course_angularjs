angular.module('telephoneDirectory').controller('telephoneDirectoryCtrl', function ($scope, serialGenerator, contacts, operators, colors) {
  $scope.app = 'Telephone Directory';

  $scope.contacts = contacts.data;
  $scope.operators = operators.data;
  $scope.colors = colors.data;
  
  var generateSerial = function (contacts) {
    contacts.forEach(function (contact) {
      contact.serial = serialGenerator.generate();
    });
  };
  
  $scope.deleteContact = function (contacts) {
    $scope.contacts = contacts.filter(function (contact) {
      if (!contact.selected) return contact;
    });
  };
  $scope.isContactSelected = function (contacts) {
    if (contacts != undefined) {
      return contacts.some(function (contact) {
        return contact.selected;
      });
    }
  };
  $scope.orderByField = function (field) {
    $scope.criteriaOrder = field;
    $scope.directionOrder = !$scope.directionOrder;
  };

  generateSerial($scope.contacts);
});