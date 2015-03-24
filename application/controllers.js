angular.module(application)
	.controller('ControlPanelController', ['ipsumService', function(ipsumService) {
		'use strict';

		var controller = this;

		controller.numerals = ['start', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'end'];

		controller.presets = {
			container: {
				'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
				'justify-content': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
				'align-items': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
				'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
				'height': ['auto', '100%']
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

		controller.containerStyles = {
			'height': '100%'
		};

		controller.resetView = function() {
			controller.elements = [];
		};

		controller.loremElementBody = function(index) {
			controller.elements[index].body = [ipsumService.randomFemale(), ipsumService.randomLast()].join(' ');
		};

		controller.removeElement = function(index) {
			controller.elements.splice(index,  1);
			delete controller.selected_index;
		};

		controller.appendElement = function() {
			controller.elements.push({
				selected: false,
				style: {}
			});

			controller.selected_index = Object.keys(controller.elements).pop();
			angular.forEach(controller.elements, function(element, key) {
				controller.elements[key].selected = false;
			});

			controller.elements[controller.selected_index].selected = true;
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
	}]);
