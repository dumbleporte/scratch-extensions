new (function() {
	//INCLUSION OF JQUERY NEEDED
	// THIS EXTENSION IS NOT FINISHED
	var ext = this;
	var descriptor = {
		blocks: [
			['r', '%s of user %s', 'userid']
		],
		menus: {
			profilestuff: ['About', 'Country', 'Working on']
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Text-Stuff-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.userid = function(stuff, user) {
		var jsonurl = 'https://scratch.mit.edu/api/v1/user/' + user + '/?format=json';
		var result = '';
		$.getJSON(jsonurl, function(data) {
			var profile = data.userprofile;
			switch(stuff) {
				case 'About':
					result = profile.bio;
					break;
				case 'Country':
					result = profile.country;
					break;
				case 'Working on':
					result = profile.status;
			}
		});
		return result;
	}
	
	ScratchExtensions.register('Scratch API', descriptor, ext);
})();