'use strict';

var application = 'application';
var dependences = ['ngRoute', 'ipsum'];

angular.module(application, dependences)
	.constant('PATH', {
		base: 'templates'
	});