angular.module(application)
	.config(['$routeProvider', '$locationProvider', 'PATH', function($routeProvider, $locationProvider, PATH) {
		'use strict';

		$routeProvider
			.when('/', {
				templateUrl: PATH.base + '/index.html'
			})
			.when('/preface', {
				templateUrl: PATH.base + '/preface.html',
				controller: 'PrefaceController as Preface'
			})
			.when('/step:stepId', {
				templateUrl: PATH.base + '/step.html',
				controller: 'StepController as Step'
			});

		$locationProvider.html5Mode(false);
	}]);
