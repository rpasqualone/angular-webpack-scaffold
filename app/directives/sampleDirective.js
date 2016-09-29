'use strict';

angular.module('sampleApp')
	.directive('sampleDirective', ['SampleService', function (SampleService) {
		return {
			templateUrl: './app/directives/sampleDirective.html',
			link: function ($scope, element, attributes) {
				
			}
		};
	}]);
