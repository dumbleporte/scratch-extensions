new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['R', '%m.users of user %s', 'userUsername', 'id', 'mres']
		],
		menus: {
			users: ['', '']
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Scratch-API-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.userid = function(stuff, user, callback) {
		var jsonurl = 'https://api.scratch.mit.edu/users/' + user + '?randomstuff=' + Math.floor(Math.random() * 10000) + '&paranoia=' + Number(new Date()).toString();
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
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
				callback('');
			}
		});
		r.addEventListener('error', function() {callback('')});
		r.open('get', jsonurl, true);
		r.send();
	}
	
	ScratchExtensions.register('Scratch API', descriptor, ext);
})();
