new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'cornify', 'add']
		],
		url : 'https://github.com/savaka2/scratch-extensions/wiki/Cornify-extension'
	};
	
	/*
	function callback() {
		cornify_add()
	}
	*/
	var s = document.createElement('script');
	s.id = 'thing';
	s.src = 'http://www.cornify.com/js/cornify.js';
	/*
	if (s.addEventListener) {
		s.addEventListener('load', callback, false)
	} else if (s.readyState) {
		s.onreadystatechange = callback
	}
	*/
	document.head.appendChild(s);
	
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
