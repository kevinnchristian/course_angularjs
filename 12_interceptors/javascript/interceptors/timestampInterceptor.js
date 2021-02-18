angular.module('telephoneDirectory').factory('timestampInterceptor', function () {
  return {
    request: function (config) {
      var url = config.url;
      var timestamp = new Date().getTime();

      // Procurar as VIEWS, caso tenha não precisa marcar...porque as VIEWS pode ser CACHEADAS
      if (url.indexOf('view') > -1) return config;

      // Fazer a marcação das url's
      config.url = url + '?timestamp=' + timestamp;

      return config;
    }
  };
});