angular.module("telephoneDirectory").factory("contactsAPIService", function ($http, config) {
	let _getContacts = function () {
		return $http.get(config.baseUrl + "/contacts");
	};

	let _getContact = function (id) {
		return $http.get(config.baseUrl + "/contacts/" + id);
	};

	let _saveContact = function (contact) {
		return $http.post(config.baseUrl + "/contacts", contact);
	};

	return {
		getContacts: _getContacts,
		getContact: _getContact,
		saveContact: _saveContact
	};
});