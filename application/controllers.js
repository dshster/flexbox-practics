angular.module(application)
	.controller('StepController', [function() {
		'use strict';

	}])

	.controller('ControlPanelController', [function() {
		'use strict';

		var controller = this;
		var element = {
			selected: false,
			style: {}
		};

		controller.numerals = ['start', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'end'];

		controller.presets = {
			container: {
				'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
				'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
				'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
			}
		};

		controller.appendElement = function() {
			controller.elements.push(element);
		};

		controller.resetView = function() {
			controller.elements = [];
		};

		controller.toggleElementSelected = function(index) {
//			controller.elements[index].selected = index//!controller.elements[index].selected;
		};

		controller.elements = [];
	}])

	.controller('PrefaceController', [function() {
		'use strict';

	}]);
