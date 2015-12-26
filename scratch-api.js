function getJSONP(url, success) {

    var ud = '_' + +new Date,
        script = document.createElement('script'),
        head = document.getElementsByTagName('head')[0] 
               || document.documentElement;

    window[ud] = function(data) {
        head.removeChild(script);
        success && success(data);
    };

    script.src = url.replace('callback=?', 'callback=' + ud);
    head.appendChild(script);

}

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
		var jsonurl = 'https://scratch.mit.edu/api/v1/user/' + user + '/?format=json';
		var obj = '';
		getJSONP(jsonurl, function(data) {
			obj = data;
		});
		var profile = obj.userprofile;
		switch(stuff) {
			case 'About':
				return profile.bio;
				break;
			case 'Country':
				return profile.country;
				break;
			case 'What I\'m working on':
				return profile.status;
		}
	}
	
	ScratchExtensions.register('Scratch API', descriptor, ext);
})();
