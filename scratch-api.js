new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['r', '%m.profilestuff of user %s', 'userid', 'About']
		],
		menus: {
			profilestuff: ['About', 'Country', 'What I\'m working on']
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Scratch-API-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.userid = function(stuff, user) {
		var r = new XMLHttpRequest();
		r.addEventListener("load", function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				var profile = obj.userprofile;
				switch(stuff) {
					case 'About':
						callback(profile.bio);
						break;
					case 'Country':
						callback(profile.country);
						break;
					case 'What I\'m working on':
						callback(profile.status);
				}
			} else {
				callback("");
			}
		});
		r.addEventListener("error", function() {callback("")});
		r.open("get", jsonurl, true);
		r.send();
	} // Credit to Zatnik
	
	ScratchExtensions.register('Scratch API', descriptor, ext);
})();
