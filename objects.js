new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'initialize object %s', 'init'],
			[' ', 'set %s of object %s to %s', 'set'],
			[' ', 'delete property %s of object %s', 'del'],
			['r', '%s of object %s', 'get', ''],
			['-'],
			[' ', 'clear all object data', 'clear'],
			['-'],
			['r', 'debug', 'debug']
		],
		url : 'https://github.com/savaka2/scratch-extensions/wiki/Objects-extension'
	};
	
	ext.objobj = {};
	
	ext._shutdown = function() {
		objobj = {};
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.init = function(name) {
		objobj[name] = {};
	};
	
	ext.set = function(key, name, value) {
		if (objobj[name] !== undefined) {
			objobj[name][key] = value;
		}
	};
	
	ext.del = function(key, name, value) {
		if (objobj[name] !== undefined) {
			if (objobj[name][key] !== undefined) {
				delete objobj[name][key];
			}
		}
	};
	
	ext.get = function(key, name, value) {
		if (objobj[name] !== undefined) {
			if (objobj[name][key] !== undefined) {
				return objobj[name][key];
			} else {
				return '';
			}
		} else {
			return '';
		}
	};
	
	ext.clear = function() {
		objobj = {};
	};
	
	ext.debug = function() {
		return JSON.stringify(objobj);
	};
	
	ScratchExtensions.register('Objects', descriptor, ext);
})();