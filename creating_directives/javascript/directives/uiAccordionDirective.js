angular.module('telephoneDirectory').directive('uiAccordions', function () {
  // Essa aqui vai ser a deritiva pai
  return {
    controller: function ($scope, $element, $attrs) {  // função construtora 
      var accordions = [];

      this.registerAccordion = function (accordion) {
        accordions.push(accordion);  // registrou os 3 elementos criados no html
      };

      this.closeAll = function () {  // operação, que vai percorrer todos os accordions
        accordions.forEach(function (accordion) {
          accordion.isOpened = false;
        })
      };
    }
  };
});

angular.module('telephoneDirectory').directive('uiAccordion', function () {
  // Essa aqui vai ser a deritiva filha
  return {
    templateUrl: 'view/accordion.html',
    transclude: true,
    scope: {
      title: '@',
    },
    require: '^uiAccordions', // ^ -> usado para indicar o elemento pai
    link: function (scope, element, attrs, ctrl) {
      ctrl.registerAccordion(scope);
      scope.open = function () {
        ctrl.closeAll();  // fecha o accordion anterior ao que vai abrir
        scope.isOpened = true;  // abre o accordion especificado com clique
      };
    }
  };
});