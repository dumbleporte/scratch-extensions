new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'exit scratchx', 'exit']
		],
		url : "https://github.com/savaka2/scratch-extensions/wiki/Exit-ScratchX-extension"
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.exit = function() {
		if (window.location.href == "http://scratchx.org/#home" || window.location.href == "http://scratchx.org/#home/") {
			window.location = "http://scratchx.org/#";
		} else {
			window.location = "http://scratchx.org/#home";
		}
	};
	
	ScratchExtensions.register('Exit ScratchX', descriptor, ext);
})();
