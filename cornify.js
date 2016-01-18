new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'cornify', 'add']
		],
		url : 'https://github.com/savaka2/scratch-extensions/wiki/Cornify-extension'
	};
	
	if (document.getElementById('corn') == null) {
		var s = document.createElement('script');
		s.id = 'corn';
		s.src = 'http://www.cornify.com/js/cornify.js';
		document.head.appendChild(s);
	};
	
	ext._shutdown = function() {
		
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.add = function() {
		cornify_add();
	};
	
	ScratchExtensions.register('Cornify', descriptor, ext);
})();
