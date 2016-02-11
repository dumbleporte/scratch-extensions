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
			[' ', 'set %s of row %n of table %s to %s', 'tableSet'], //next
			['r', '%s of row %n of table %s', 'tableGet', ''],
			['r', 'length of table %s', 'tableLength', ''],
			['-'],
			['r', 'properties of %m.types %s', 'r', '']
		],
		menus: {
			'types': ['object', 'table', 'index']
		},
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
		if (name.length > 0) {
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
			objects[pos].data[field] = value;
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
	
	ext.tableInit = function(name, columns) {
		if (name.length > 0) {
			var pos = -1;
			for (i = 0; i < tables.length; i++) {
				if (tables[i].nameText == name) {
					pos = i;
					break;
				}
			}
			var creating = {};
			creating.nameText = name;
			var splitCols = columns.split(',');
			var creatingCols = [];
			for (i = 0; i < splitCols.length; i++) {
				creatingCols.push(splitCols[i]);
			}
			creating.cols = creatingCols;
			creating.data = [];
			if (pos != -1) {
				tables[pos] = creating;
			} else {
				tables.push(creating);
			}
		}
	};
	
	ext.tableAdd = function(values, name) {
		var pos = -1;
		for (i = 0; i < tables.length; i++) {
			if (tables[i].nameText == name) {
				pos = i;
				break;
			}
		}
		var entries = values.split(',');
		if (pos != -1 && entries.length <= tables[pos].cols.length) {
			var creating = {};
			for (i = 0; i < entries.length; i++) {
				creating[tables[pos].cols[i]] = entries[i];
			}
			for (i = (tables[pos].cols.length - entries.length); i > 0; i--) {
				creating[tables[pos].cols[(tables[pos].cols.length - i)]] = '';
			}
			tables[pos].data.push(creating);
		}
	};
	
	ext.tableDel = function(row, name) {
		var pos = -1;
		for (i = 0; i < tables.length; i++) {
			if (tables[i].nameText == name) {
				pos = i;
				break;
			}
		}
		if (pos != -1 && row > 0 && row <= tables[pos].data.length && Math.round(row) == row) {
			tables[pos].data.splice((row - 1), 1);
		}
	};
	
	ext.tableClear = function(name) {
		var pos = -1;
		for (i = 0; i < tables.length; i++) {
			if (tables[i].nameText == name) {
				pos = i;
				break;
			}
		}
		if (pos != -1) {
			tables[pos].data = [];
		}
	};
	
	ext.tableIns = function(row, values, name) {
		var pos = -1;
		for (i = 0; i < tables.length; i++) {
			if (tables[i].nameText == name) {
				pos = i;
				break;
			}
		}
		var entries = values.split(',');
		if (pos != -1 && entries.length <= tables[pos].cols.length && row > 0 && row <= (tables[pos].data.length + 1) && Math.round(row) == row) {
			var creating = {};
			for (i = 0; i < entries.length; i++) {
				creating[tables[pos].cols[i]] = entries[i];
			}
			for (i = (tables[pos].cols.length - entries.length); i > 0; i--) {
				creating[tables[pos].cols[(tables[pos].cols.length - i)]] = '';
			}
			tables[pos].data.splice((index - 1), 0, creating);
		}
	};
	
	ScratchExtensions.register('Data Records', descriptor, ext);
})();
