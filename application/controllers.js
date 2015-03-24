angular.module(application)
	.controller('StepController', [function() {
		'use strict';

	}])

	.controller('ControlPanelController', ['ipsumService', function(ipsumService) {
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

		// preserve sort order
		controller.keys = {
			container: Object.keys(controller.presets.container),
			element: Object.keys(controller.presets.element)
		};

		controller.appendElement = function() {
			controller.elements.push({
				selected: false,
				style: {
					'flex-basis': 'auto'
				}
			});
		};

		controller.resetView = function() {
			controller.elements = [];
		};

		controller.loremElementBody = function(index) {
			controller.elements[index].body = ipsumService.words(50);
		};

		controller.removeElement = function(index) {
			controller.elements.splice(index,  1);
			delete controller.selected_index;
		};

		controller.toggleElementSelected = function(index) {
			angular.forEach(controller.elements, function(element, key) {
				if (controller.elements[index] === controller.elements[key]) {
					controller.elements[index].selected = !controller.elements[index].selected;

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
