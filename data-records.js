new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'initialize object %s with parameters %s (space separated)', 'objInit'],
			[' ', 'set %s of object %s to %s', 'objSet'],
			['r', '%s of object %s', 'objGet', ''],
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
	
	ext.objInit = function(name, keys) {
		//code
	};
	
	ext.objSet = function(key, name, value) {
		//code
	};
	
	ext.objGet = function(key, name) {
		//code
	};
	
	ScratchExtensions.register('Data Records', descriptor, ext);
})();