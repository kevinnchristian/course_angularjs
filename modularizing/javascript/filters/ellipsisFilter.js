// Filter dos ... no final, para limitar caracteres
angular.module('telephoneDirectory').filter('ellipsis', function () {
  return function (input, size) {
    if (input.length <= size) return input;
    var output = input.substring(0, (size || 8)) + "...";
    return output;
  }
})