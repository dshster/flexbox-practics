angular.module(application)
	.directive('sandbox', function (){
		'use strict';

		return {
			restrict: 'AE',
			scope: false,
			controller: 'ControlPanelController as Sandbox'
		};
	})

	.directive('blockSection', function() {
		'use strict';

		return {
			restrict: 'AE',
			scope: false,
			link: function(scope, element) {
				element.addClass('element--interactive');
			}
		};
	});
