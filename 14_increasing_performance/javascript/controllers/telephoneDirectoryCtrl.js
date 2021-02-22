angular.module('telephoneDirectory').controller('telephoneDirectoryCtrl', function ($scope, serialGenerator, contacts, operators, colors, $filter) {
  // $filter vai permite construir qualquer tipo de filtro na aplicação
  $scope.app = $filter('upper')('Telephone Directory');

  $scope.contacts = contacts.data;
  $scope.operators = operators.data;
  $scope.colors = colors.data;

  // Escrevendo uma função de forma mais perfomatica, fazer function init e chamar ela depois em outra function
  var init = function () {
    calcTaxs($scope.contacts);
    generateSerial($scope.contacts);
  };

  var calcTaxs = function (contacts) {
    contacts.forEach(function (contact) {
      contact.operator.priceWithTax = calcTax(contact.operator.price);
    })
  };
  
  var generateSerial = function (contacts) {
    contacts.forEach(function (contact) {
      contact.serial = serialGenerator.generate();
    });
  };
  
  $scope.deleteContact = function (contacts) {
    $scope.contacts = contacts.filter(function (contact) {
      if (!contact.selected) return contact;
    });
    $scope.checkSelectedContact($scope.contacts);
  };

  // var count = 0;
  $scope.checkSelectedContact = function (contacts) {
    // console.log(count++);
    if (contacts != undefined) {
      $scope.hasContactSelected = contacts.some(function (contact) {
        return contact.selected;
      });
    }
  };
  
  $scope.orderByField = function (field) {
    $scope.criteriaOrder = field;
    $scope.directionOrder = !$scope.directionOrder;
  };

  // var count = 0; -> para ver quantas vezes essa function foi chamada
  var calcTax = function (price) {
    // console.log(count++); 
    var tax = 1.2;
    return price * tax;
  }

  $scope.reset = function () {
    $scope.contacts = angular.copy($scope.contacts);
  }

  init();
});