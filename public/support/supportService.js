var app = angular.module('textSupport');

app.service('supportService', function ($http, $firebase) {
	this.postText = function (txt){
		return $http.post('http://localhost:9000/#/support/messages', {body: txt});
	}

}