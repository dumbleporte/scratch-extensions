new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'initialize object %s', 'objInit']
		],
		url : 'https://github.com/savaka2/scratch-extensions/wiki/Data-Records-extension'
	};
	
	objects = [];
	
	ext._shutdown = function() {
		objects = [];
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.objInit = function(s) {
		//code
	};
	
	ScratchExtensions.register('Data Records', descriptor, ext);
})();
