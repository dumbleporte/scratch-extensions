new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'initialize object %s with parameters %s (space separated)', 'objInit'],
			[' ', 'set %s of object %s to %s', 'objSet'],
			['r', '%s of object %s', 'objGet', '']
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
		var pos = -1;
		for (i = 0; i < objects.length; i++) {
			if (objects[i].nameText == name) {
				pos = i;
				break;
			}
		}
		var creating = {};
		creating.nameText = name;
		var splitKeys = keys.split(' ');
		var creatingData = {};
		for (i = 0; i < splitKeys.length; i++) {
			creatingData[splitKeys[i]] = '';
		}
		creating.data = creatingData;
		if (pos != -1) {
			objects[pos] = creating;
		} else {
			objects.push(creating);
		}
	};
	
	ext.objSet = function(key, name, value) {
		var pos = -1;
		for (i = 0; i < objects.length; i++) {
			if (objects[i].nameText == name) {
				pos = i;
				break;
			}
		}
		if (pos != -1 && objects[pos].data[key] != undefined) {
			objects[pos].data[key] = value; //idk
		}
	};
	
	ext.objGet = function(key, name) {
		var pos = -1;
		for (i = 0; i < objects.length; i++) {
			if (objects[i].nameText == name) {
				pos = i;
				break;
			}
		}
		if (pos != -1 && objects[pos].data[key] != undefined) {
			return objects[pos].data[key];
		} else {
			return '';
		}
	};
	
	ScratchExtensions.register('Data Records', descriptor, ext);
})();
