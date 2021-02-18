angular.module('telephoneDirectory').config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.when('/contacts', {
    templateUrl: 'view/contacts.html',
    controller: 'telephoneDirectoryCtrl',
    resolve: {
      contacts: function (contactsAPIService) {
        return contactsAPIService.getContacts();
      },
      operators: function (operatorsAPIService) {
        return operatorsAPIService.getOperators();
      },
      colors: function (colorsAPIService) {
        return colorsAPIService.getColors();
      }
    }
  });

  $routeProvider.when('/new', {
    templateUrl: 'view/newContact.html',
    controller: 'newContactCtrl',
    resolve: {
      contacts: function (contactsAPIService) {
        return contactsAPIService.getContacts();
      },
      operators: function (operatorsAPIService) {
        return operatorsAPIService.getOperators();
      },
      colors: function (colorsAPIService) {
        return colorsAPIService.getColors();
      }
    }
  });

  $routeProvider.when('/contactDetails/:id', {
    templateUrl: 'view/contactDetails.html',
    controller: 'contactDetailsCtrl',
    resolve: {
      contact: function (contactsAPIService, $route) {
        return contactsAPIService.getContact($route.current.params.id); // pegando id da rota atual
      },
    }
  });

  $routeProvider.otherwise({
    redirectTo: '/contacts'
  });
});