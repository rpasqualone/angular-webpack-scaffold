'use strict';

var app = angular.module('sampleApp', ['ngRoute', 'ngResource']).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/views/index.html'
	});
}]);
