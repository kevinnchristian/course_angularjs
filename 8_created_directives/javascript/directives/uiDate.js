angular.module('telephoneDirectory').directive('uiDate', function ($filter) {
  return {
    require: "ngModel", // quero acessar a api de ngModel
    link: function (scope, element, attrs, ctrl) {
      // scope vai ser o mesmo do controller, caso a sua diretiva não tenha scope isolado

      var _formatDate = function (date) {
        date = date.replace(/[^0-9]+/g, ''); // substituir tudo aquilo que não seja number por vazio
        if (date.length > 2) {
          date = date.substring(0, 2) + '/' + date.substring(2);
        }
        if (date.length > 5) {
          date = date.substring(0, 5) + '/' + date.substring(5, 9);
        }
        return date;
      }

      element.bind('keyup', function () {
        ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
        ctrl.$render();
      });

      ctrl.$parsers.push(function (value) {
        if (value.length == 10) {
          var dateArray = value.split('/');
          return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime() ;
        }
      });

      ctrl.$formatters.push(function (value) {
        return $filter('date')(value, 'dd/MM/yyyy');  // qualquer data que bater aqui vai ser formatada, por causa deste filter
      });

    }
  };
});