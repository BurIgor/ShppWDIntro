let formTask = document.getElementById('task');
const regIp = /(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?\b)/g;
const regUrl0 = /((http|https|ftp):\/\/)?(([\w.-]*)\.([\w]*))/ig;
const regUrl = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/ig;

formTask.onsubmit = function(e) {
	e.preventDefault();
	orderliness();
}

orderliness = function() {

	let textarea = formTask.text.value;
	let arrayNames = textarea.split(','); 	// transform text to array

	// remove "white-spice characters" at the beginning and end of lines
	arrayNames.forEach(function(str, i) {
		arrayNames[i] = str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	});

	// select links and ip-addresses from the array of names
	let arrayLinks = arrayNames.filter(function(str) {
		if (str.match(regUrl) !== null) return true;
		if (str.match(regIp) !== null) {
			if (str.match(/\./g).length == 3) return true;
			else return false;
		};
		return false;
	});

	// remove from links 'http://' and 'https://'
	let clearLinks = arrayLinks.map(function(str) {
		if (~str.indexOf('https://')) return str.substring(8) + ' https://';
		if (~str.indexOf('http://')) return str.substring(7) + ' http://';
		if (str.match(/\./g).length == 3) return str + ' \/\/';
		return str + ' ';
	});

	clearLinks.sort();

	// output a list of links
	let links = document.getElementById('links');
	links.innerHTML = "<br />";

	for (let i = 0; i < clearLinks.length; i++) {
		let str = clearLinks[i].split(' ');
		links.innerHTML += "<a href='" + str[1] + str[0] + "' target='_blank'>" + str[0] + "</a>" + "<br />";
	}
}