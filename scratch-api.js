new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['R', '%m.users of user %s', 'userUsername', 'id', 'mres']
		],
		menus: {
			users: ['id', 'join time', 'country', 'about me', 'what I\'m working on']
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
				switch(stuff) {
					case 'id':
						callback(obj.id);
						break;
					case 'join time':
						callback(obj.history.joined);
						break;
					case 'country':
						callback(obj.profile.country);
						break;
					case 'about me':
						callback(obj.profile.bio);
						break;
					case 'what I\'m working on':
						callback(obj.profile.status);
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
