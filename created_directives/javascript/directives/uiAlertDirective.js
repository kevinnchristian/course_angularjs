angular.module('telephoneDirectory').directive('uiAlert', function () {
  return {
    templateUrl: 'view/alert.html',
    replace: true,
    restrict: 'E',
    scope: {  // cria um scope isolado, deixando de ser acessado pelo scope compartilhado antes
      title: '@',  // como o parametro e valor tem menos nome, basta passar @
      // message: '='  // ele faz o bind da propriedade do scope aqui do controle com scope da diretiva na view
    },
    transclude: true
  };
});