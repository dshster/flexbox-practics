'use strict';

var application = 'application';
var dependences = ['ngRoute'];

angular.module(application, dependences)
	.constant('PATH', {
		base: 'templates'
	});