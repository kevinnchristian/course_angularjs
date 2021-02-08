// ---------- Created Directives ---------- //

// -> How do I create a directive?
// angular.module('nameModule').filter('nameDirective', function () {
  // return {
      // Return creating the Directive Definition Object
      // Composto de propriedades que definem como essa diretiva vai se comporta
      // Propriedades:
        // - template
        // - templateUrl
        // - replace
        // - restrict
        // - scope
        // - transclude 
        // - link 
        // - require
//  }
// });


// -> Para saber em qual scope estamos coloque {{$id}}
// -> @ Vincula o valor do atributo diretamente a uma propriedade do scope da diretiva
// -> = cria um vínculo bi-direcional entre uma propriedade do scope do template a uma 
//    propriedade do scope da diretiva, aqui acontece two way data bind
// -> link - trata eventos da DOM ou defini comportamentos associado com a lógica da diretiva 
//    -> scope vai ser o mesmo do controller, caso a sua diretiva não tenha scope isolado
//    ->scope isolado na diretiva é boa prática pq assim você estará apto a reutiliza-lá
//    ->utilizar o mesmo scope do controller, tira a questão de reutilizar a diretiva 