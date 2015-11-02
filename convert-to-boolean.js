new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['b', '%s as boolean', 'asboolean'],
			['b', 'report %s', 'report']
		],
		url : "https://github.com/savaka2/scratch-extensions/wiki/Convert-to-Boolean-extension"
	};
	
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.asboolean = function(s) {
		if (s === true) {
			return true;
		} else if (typeof s === "string") {
			if (s.toLowerCase() === "true") {
				return true
			} else {
				return false
			}
		} else {
			return false;
		}
	};
	
	ext.report = function(s) {
		return s;
	};
	
	ScratchExtensions.register('Convert to Boolean', descriptor, ext);
})();
