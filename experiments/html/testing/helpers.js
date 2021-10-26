(function (window) {
	'use strict';

	// Get element(s) by CSS selector:
	window.qs = function (selector, scope) {
                return (scope || document).querySelector(selector);
        };
        
        
})(window);