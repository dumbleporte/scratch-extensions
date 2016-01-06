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
		if (window.location.href.substring(0,25) == 'http://scratchx.org/#home') {
			window.location = 'http://scratchx.org/#' + window.location.href.substring(25);
		} else if (window.location.href.substring(0,21) == 'http://scratchx.org/#') {
			window.location = 'http://scratchx.org/#home' + window.location.href.substring(21);
		} else {
			console.log('something didn\'t work')
		}
	};
	
	ScratchExtensions.register('Exit ScratchX', descriptor, ext);
})();