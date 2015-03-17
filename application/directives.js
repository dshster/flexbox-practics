angular.module(application)
	.directive('controlPanel', function () {
		'use strict';

		return {
			restrict: 'AE',
			scope: false,
			controller: 'ControlPanelController as Sandbox'
		}
	})

	.directive('sandbox', function () {
		'use strict';

		return {
			restrict: 'AE',
			scope: false
		}
	});
