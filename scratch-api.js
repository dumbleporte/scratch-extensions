new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			/*['R', '%m.users of following %n of user %s', 'usersUsernameFollowing', 'username', 1, 'mres'],
			['R', 'following count of user %s', 'usersUsernameFollowing_length', 'mres'],
			['R', '%m.users of follower %n of user %s', 'usersUsernameFollowers', 'username', 1, 'mres'],
			['R', 'follower count of user %s', 'usersUsernameFollowers_length', 'mres'],
			['-'],*/
			['R', 'message count of user %s', 'usersUsernameMessagesCount', 'mres'],
			['-'],
			['R', '%s of news item %n', 'news', 'title', 1],
			['R', 'length of news', 'news_length', ''],
			['-'],
			['R', '%m.projects of shared project %n of user %s', 'usersUsernameProjects', 'title', 1, 'mres'],//make
			['R', 'project count of user %s', 'usersUsernameProjects_length', 'mres'],//make
			['R', '%m.projects of project with id %n by user %s', 'usersUsernameProjectsProject', 'title', 10128125, 'mres'],//make
			/*['R', '%m.projects of favorite project %n by user %s', 'usersUsernameFavorites', 'title', 1, 'mres'],
			['R', 'favorite count of user %s', 'usersUsernameFavorites_length', 'mres'],*/
			['R', 'total project count', 'projectsCountAll', 'mres'],//make
			['-'],
			['R', '%m.users of user %s', 'usersUsername', 'id', 'mres']
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
	
	ext.usersUsernameMessagesCount = function(user, callback) {
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
	
	ext.usersUsername = function(stuff, user, callback) {
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
