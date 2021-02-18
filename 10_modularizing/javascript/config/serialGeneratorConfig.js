angular.module('telephoneDirectory').config(function (serialGeneratorProvider) {
  serialGeneratorProvider.setLength(5);
})

// -> Eu consigo configurar meu provider, porque lá no arquivo da pasta lib/serialGenerator.js
//    tenho declarado a API .provider, está config aqui eu utilizo lá. 