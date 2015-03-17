angular.module(application)
	.controller('StepController', ['$scope', function($scope) {
		'use strict';

	}])

	.controller('ControlPanelController', ['$scope', function($scope) {
		'use strict';

		var controller = this;
		var columnTemplate = {};

		controller.appendColumn = function() {
			controller.columns.push(columnTemplate);
		};

		controller.columns = [];
	}])

	.controller('PrefaceController', ['$scope', function($scope) {
		'use strict';

	}]);
