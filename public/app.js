var app = angular.module('textSupport', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home/home.html',
		controller: 'homeCtrl'
	})
	.when('/support', {
		templateUrl: 'support/support.html',
		controller: 'supportCtrl'
	})
	.otherwise({
		redirecTo: '/'
	})
});