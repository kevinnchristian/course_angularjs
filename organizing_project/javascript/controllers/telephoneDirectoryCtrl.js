angular.module('telephoneDirectory').controller('telephoneDirectoryCtrl', function ($scope, $filter, $http) {
  $scope.app = 'Telephone Directory';
  var loadingContacts = function () {
    $http.get('http://localhost:3412/contacts').then(function (res) {
      $scope.contacts = res.data;
    }, function (res) {
      $scope.message = `ERROR: ${res.statusText} - Status: ${res.status}`
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