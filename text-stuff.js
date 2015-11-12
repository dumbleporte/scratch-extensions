new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['r', '%s reversed', 'reverse']
		],
		url: "https://github.com/savaka2/scratch-extensions/wiki/Text-Stuff-extension"
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.reverse = function(s) {
		for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
		return o;
	} // credit to edd mann
		
	ScratchExtensions.register('Text Stuff', descriptor, ext);
})();