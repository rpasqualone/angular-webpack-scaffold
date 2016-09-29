'use strict';

angular.module('sampleApp').service('SampleService', ['$resource', function ($resource) {
	var self = this;
	var resource = $resource('http://URL/:id', {}, {
		update: { method: 'patch' },
		create: { method: 'post' }
	});

	this.query = resource.query();

	this.create = function (props) {
		return resource.create(props).$promise;
	};

	this.update = function (id, props) {
		return resource.update({id: id}, props).$promise;
	};

	this.delete = function (id) {
		return resource.delete({id: id}).$promise;
	};

	this.refresh = function () {
		self.query = resource.query();
		return self.query.$promise;
	};
}]);
