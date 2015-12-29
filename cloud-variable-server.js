new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['R', 'cloud variable ☁ %s of project with id %n', 'cvs', '', 10000000]
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Cloud-Variable-Server-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.cvs = function(varname, project, callback) {
		var jsonurl = 'https://scratch.mit.edu/varserver/' + project;
		var r = new XMLHttpRequest();
		r.addEventListener("load", function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				var cvars = obj.variables;
				var list = [];
				for (i = 0; i < cvars.length; i++) {
					list.push((cvars[i]).name);
				}
				var answer = (cvars[list.indexOf('☁ ' + varname)]).value;
				if (Number(answer) != NaN) {
					return Number(answer);
				} else {
					return answer;
				}
			} else {
				callback("");
			}
		});
		r.addEventListener("error", function() {callback("")});
		r.open("get", jsonurl, true);
		r.send();
	}
	
	ScratchExtensions.register('Cloud Variable Server', descriptor, ext);
})();