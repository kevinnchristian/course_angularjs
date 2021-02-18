angular.module('telephoneDirectory').config(function (serialGeneratorProvider) {
  serialGeneratorProvider.setLength(5);
})