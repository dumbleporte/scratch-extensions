new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			['r', '%s reversed', 'reverse'],
			['r', '%s in pig latin', 'pig']
		],
		url: "https://github.com/savaka2/scratch-extensions/wiki/Text-Stuff-extension"
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.reverse = function(s) {
		for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
		return o;
	} // credit to edd mann
	
	ext.alpha = function(s) {
		var charlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		for (i = 0; i < str.length; i++) {
			if (charlist.indexOf(str.charAt(i)) === -1) {
				return false;
			}
		}
		return true;
	}
	
	ext.pig = function(s) {
		if (s.length < 1) {
			return "";
		} else if (s.length < 3) {
			return "";
		} else if (! ext.alpha(s)) {
			return "";
		} else {
			var lower = s.toLowerCase();
			var vowels = ['a', 'e', 'i', 'o', 'u'];
			var threeletters = ['sch', 'scr', 'shr', 'sph', 'spl', 'spr', 'squ', 'str', 'thr'];
			var twoletters = ['bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pr', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr'];
			if (vowels.indexOf(lower.charAt(0)) != -1) {
				return lower + 'yay';
			} else if (threeletters.indexOf(lower.substring(0,3)) != -1) {
				return lower.substring(3) + lower.substring(0,3) + 'ay';
			} else if (twoletters.indexOf(lower.substring(0,2)) != -1) {
				return lower.substring(2) + lower.substring(0,2) + 'ay';
			} else {
				return lower.substring(1) + lower.charAt(0) + 'ay';
			}
		}
	}
	ScratchExtensions.register('Text Stuff', descriptor, ext);
})();
