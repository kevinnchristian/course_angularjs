angular.module('telephoneDirectory').controller('newContactCtrl', function ($scope, $http, serialGenerator, $location, contactsAPIService, contacts, operators, colors) {
  $scope.app = 'Telephone Directory';

  $scope.operators = operators.data;
  $scope.colors = colors.data;

  $scope.addContact = function (contact) {
    contact.id = contacts.data[contacts.data.length - 1].id + 1;  // criando um id para cada registro, com base no último resgistro
    contact.serial = serialGenerator.generate();
    contact.date = new Date();
    contactsAPIService.saveContact(contact).then(function (res) {
      delete $scope.contact;
      $scope.contactForm.$setPristine();
      $location.path('/contacts');
    });
  };

});