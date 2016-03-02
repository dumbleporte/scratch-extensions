new (function() {
	var ext = this;
	var descriptor = {
		blocks: [/* not made yet
			['R', '%m.users of %n most recent following of user %s', 'userUsernameFollowing1', 'username', 1, 'mres'],
			['R', 'following count of user %s', 'userUsernameFollowing2', 'mres'],
			['B', 'user %s is following %s?', 'userUsernameFollowing3', 'mres', 'andresmh'],
			['R', '%m.users of %n most recent follower of user %s', 'userUsernameFollowers1', 'username', 1, 'mres'],
			['R', 'follower count of user %s', 'userUsernameFollowers2', 'mres'],
			['B', 'user %s has follower %s?', 'userUsernameFollowers3', 'mres', 'andresmh'],
			['-'],*/
			['R', 'message count of user %s', 'userUsernameMessagesCount', 'mres'],
			['-'],
			['R', '%s of news item %n', 'news1', 'title', 1],
			['R', 'length of news', 'news2', ''],
			['-'],
			['R', '%m.users of user %s', 'userUsername', 'id', 'mres']
		],
		menus: {
			users: ['id', 'username', 'join time', 'country', 'about me', 'what I\'m working on'],
			news: ['post id', 'time', 'title', 'link', 'text']
		},
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Scratch-API-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.userUsernameMessagesCount = function(user, callback) {
		var jsonurl = 'https://api.scratch.mit.edu/users/' + user + '/messages/count?randomstuff=' + Math.floor(Math.random() * 10000) + '&paranoia=' + Number(new Date()).toString();
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				callback(obj.count);
			} else {
				callback('');
			}
		});
		r.addEventListener('error', function() {callback('')});
		r.open('get', jsonurl, true);
		r.send();
	}
	
	ext.news1 = function(stuff, number, callback) {
		var jsonurl = 'https://api.scratch.mit.edu/news?randomstuff=' + Math.floor(Math.random() * 10000) + '&paranoia=' + Number(new Date()).toString();
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				var post = obj[number - 1];
				if (post != undefined) {
					switch (stuff) {
						case 'post id':
							callback(post.id);
							break;
						case 'time':
							callback(post.stamp);
							break;
						case 'title':
							callback(post.headline);
							break;
						case 'link':
							callback(post.url);
							break;
						case 'text':
							callback(post.copy);
					}
				} else {
					callback('');
				}
			} else {
				callback('');
			}
		});
		r.addEventListener('error', function() {callback('')});
		r.open('get', jsonurl, true);
		r.send();
	}
	
	ext.news2 = function(callback) {
		var jsonurl = 'https://api.scratch.mit.edu/news?randomstuff=' + Math.floor(Math.random() * 10000) + '&paranoia=' + Number(new Date()).toString();
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				callback(obj.length);
			} else {
				callback('');
			}
		});
		r.addEventListener('error', function() {callback('')});
		r.open('get', jsonurl, true);
		r.send();
	}
	
	ext.userUsername = function(stuff, user, callback) {
		var jsonurl = 'https://api.scratch.mit.edu/users/' + user + '?randomstuff=' + Math.floor(Math.random() * 10000) + '&paranoia=' + Number(new Date()).toString();
		var r = new XMLHttpRequest();
		r.addEventListener('load', function() {
			if (r.responseText) {
				var obj = JSON.parse(r.responseText);
				switch (stuff) {
					case 'id':
						callback(obj.id);
						break;
					case 'username':
						callback(obj.username);
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
