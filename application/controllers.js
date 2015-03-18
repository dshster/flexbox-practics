angular.module(application)
	.controller('StepController', [function() {
		'use strict';

	}])

	.controller('ControlPanelController', [function() {
		'use strict';

		var controller = this;

		var default_styles = {};

		controller.numerals = ['start', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'end'];

		controller.presets = {
			container: {
				'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
				'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
				'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
				'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse']
			}
		};

		controller.appendElement = function() {
			controller.elements.push({
				selected: false,
				styles: default_styles
			});
		};

		controller.resetView = function() {
			controller.elements = [];
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
