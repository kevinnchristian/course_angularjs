angular.module("telephoneDirectory").service("operatorsAPIService", function ($http, config) {
	this.getOperators = function () {
		return $http.get(config.baseUrl + "/operators");
	};
});