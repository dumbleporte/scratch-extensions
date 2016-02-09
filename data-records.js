new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'initialize object %s with fields %s (comma separated)', 'objInit'],
			[' ', 'set %s of object %s to %s', 'objSet'],
			['r', '%s of object %s', 'objGet', ''],
			['-'],
			[' ', 'initialize table %s with columns %s (comma separated)', 'tableInit'],
			[' ', 'add row with data %s (comma separated) to table %s', 'tableAdd'],
			[' ', 'delete row %n of table %s', 'tableDel'],
			[' ', 'delete all rows of table %s', 'tableClear'],
			[' ', 'insert row at position %n with data %s (comma separated) of table %s', 'tableIns'],
			[' ', 'set %s of row %n of table %s to %s', 'tableSet'],
			['r', '%s of row %n of table %s', 'tableGet', ''],
			['r', 'length of table %s', 'tableGet', '']
			['-'],
			['r', 'properties of %m.types %s', 'r', ''],
		],
		menus: {
			'types': ['object', 'table', 'index']
		}
		url : 'https://github.com/savaka2/scratch-extensions/wiki/Data-Records-extension'
	};
	
	objects = [];
	tables = [];
	
	ext._shutdown = function() {
		objects = [];
		tables = [];
	};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.objInit = function(name, fields) {
		var pos = -1;
		for (i = 0; i < objects.length; i++) {
			if (objects[i].nameText == name) {
				pos = i;
				break;
			}
		}
		var creating = {};
		creating.nameText = name;
		var splitFields = fields.split(',');
		var creatingData = {};
		for (i = 0; i < splitFields.length; i++) {
			creatingData[splitFields[i]] = '';
		}
		creating.data = creatingData;
		if (pos != -1) {
			objects[pos] = creating;
		} else {
			objects.push(creating);
		}
	};
	
	ext.objSet = function(field, name, value) {
		var pos = -1;
		for (i = 0; i < objects.length; i++) {
			if (objects[i].nameText == name) {
				pos = i;
				break;
			}
		}
		if (pos != -1 && objects[pos].data[field] != undefined) {
			objects[pos].data[field] = value; //idk
		}
	};
	
	ext.objGet = function(field, name) {
		var pos = -1;
		for (i = 0; i < objects.length; i++) {
			if (objects[i].nameText == name) {
				pos = i;
				break;
			}
		}
		if (pos != -1 && objects[pos].data[field] != undefined) {
			return objects[pos].data[field];
		} else {
			return '';
		}
	};
	
	ScratchExtensions.register('Data Records', descriptor, ext);
})();
