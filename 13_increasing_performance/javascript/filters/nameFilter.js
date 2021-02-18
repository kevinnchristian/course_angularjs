angular.module('telephoneDirectory').filter('name', function () {
  return function (input) {
    var nameList = input.split(' ');
    var nameListFormatted = nameList.map(function (name) {
      if (/(da|de|do)/.test(name)) return name;
      return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
    });
    return nameListFormatted.join(' '); 
  };
});