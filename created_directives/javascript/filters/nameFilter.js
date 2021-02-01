angular.module('telephoneDirectory').filter('name', function () {
  return function (input) {
    // first params always input
    var nameList = input.split(' ');
    var nameListFormatted = nameList.map(function (name) {
      if (/(da|de|do)/.test(name)) return name; // validando por RegEx
      return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
      // pega primeiro caracter .charAt(0), transforma para UpperCase, junta a string .substring(1) do 1 ao fim
    });
    // console.log(input);
    // console.log(nameList);
    // console.log(nameListFormatted);
    return nameListFormatted.join(' '); // retorna o array com espaço em branco entre os elementos do array
  };
});