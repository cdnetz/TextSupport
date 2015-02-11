var app = angular.module('textSupport');

app.controller('supportCtrl', function ($scope, $firebase, supportService) {
	var ref = new Firebase("https://textsupportcn.firebaseio.com/numbers");
	var sync = $firebase(ref);
	$scope.texts = sync.$asArray();
	console.log($scope.texts);

	$scope.sendText = txt;
})