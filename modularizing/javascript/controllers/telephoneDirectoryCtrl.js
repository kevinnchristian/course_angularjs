angular.module('telephoneDirectory').controller('telephoneDirectoryCtrl', function ($scope, $filter, $http, serialGenerator) {
  // Injetei o modulo da lib serialGenerator
  $scope.app = 'Telephone Directory';
  $scope.contact = {
    date: 895892400000
  };
  var loadingContacts = function () {
    $http.get('http://localhost:3412/contacts').then(function (res) {
      // Para cada registro vindo da resposta gero um SERIAL
      res.data.forEach(function (item) {
        item.serial = serialGenerator.generate();
      });
      $scope.contacts = res.data;
    }, function (res) {
      $scope.message = 'Não foi possível carregar os dados.'
    })
  };
  var loadingOperators = function () {
    $http.get('http://localhost:3412/operators').then(function (res) {
      $scope.operators = res.data;
    })
  };
  var loadingColors = function () {
    $http.get('http://localhost:3412/colors').then(function (res) {
      $scope.colors = res.data;
    })
  };
  $scope.addContact = function (contact) {
    // Para cada registro criado, crio um serial novo
    contact.serial = serialGenerator.generate();
    contact.date = new Date();
    $http.post('http://localhost:3412/contacts', contact).then(function (res) {
      delete $scope.contact;
      $scope.contactForm.$setPristine();
      loadingContacts();
    })
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

  loadingContacts();
  loadingOperators();
  loadingColors();
});