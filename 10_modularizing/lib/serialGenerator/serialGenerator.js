angular.module('serialGenerator', []);  // declaramos o módulo
angular.module('serialGenerator').provider('serialGenerator', function () {  // chamamos a API .provider
  var _length = 10;

  // É como se ele tivesse pré-set para length 
  this.getLength = function () {
    return _length;
  };

  // Aqui ele set com a configuração feita no arquivo da pasta config/serialGeneratorConfig.js
  this.setLength = function (length) {
    _length = length;
  };

  // Toda vez que iniciar/rodar este method $get ele vai sobrescrever o "módulo de fábrica"
  // neste caso ele é uma função que criar um número serial para o nossa app.  
  this.$get = function () {
    return {
      generate: function () {
        var serial = '';
        while (serial.length < _length) {
          serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
        }
        return serial;
      }
    }
  }

});