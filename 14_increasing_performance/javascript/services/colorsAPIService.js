angular.module("telephoneDirectory").service("colorsAPIService", function ($http, config) {
	this.getColors = function () {
		return $http.get(config.baseUrl + "/colors");
	};
});