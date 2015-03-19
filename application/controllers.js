angular.module(application)
	.controller('StepController', [function() {
		'use strict';

	}])

	.controller('ControlPanelController', [function() {
		'use strict';

		var controller = this;

		controller.numerals = ['start', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'end'];

		controller.presets = {
			container: {
				'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
				'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
				'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
				'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse']
			},
			element: {
				'flex-basis': ['auto'],
				'flex-grow': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				'flex-shrink': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				'align-self': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
			}
		};

		controller.appendElement = function() {
			controller.elements.push({
				selected: false,
				style: {},
				default: {
					'flex-basis': 'auto',
					'flex-grow': 0,
					'flex-shrink': 0,
					'align-self': 'flex-start'
				}
			});
		};

		controller.resetView = function() {
			controller.elements = [];
		};

		controller.removeElement = function (index) {
			controller.elements.splice(index,  1);
		};

		controller.toggleElementSelected = function(index) {
			angular.forEach(controller.elements, function(element, key) {
				if (controller.elements[index] === controller.elements[key]) {
					controller.elements[index].selected = !!!controller.elements[index].selected;

					if (true === controller.elements[index].selected) {
						controller.selected_index = index;
					} else {
						delete controller.selected_index;
					}
				} else {
					controller.elements[key].selected = false;
				}
			});
		};

		controller.elements = [];
	}])

	.controller('PrefaceController', [function() {
		'use strict';

	}]);
