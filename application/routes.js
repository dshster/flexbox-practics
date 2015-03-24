angular.module(application)
	.config(['$routeProvider', '$locationProvider', 'PATH', function($routeProvider, $locationProvider, PATH) {
		'use strict';

		$routeProvider
			.when('/', {
				templateUrl: PATH.base + '/index.html'
			});

		$locationProvider.html5Mode(false);
	}]);
